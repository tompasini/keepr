using System;
using System.Collections.Generic;
using System.Data;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
  public class KeepsRepository
  {
    private readonly IDbConnection _db;

    private readonly string populateCreator = @"SELECT keep.*, profile.* FROM keeps keep INNER JOIN profiles profile ON keep.creatorId = profile.id ";

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    public int Create(Keep newKeep)
    {
      string sql = @"
      INSERT INTO keeps
      (name, description, img, creatorId)
      VALUES
      (@Name, @Description, @Img, @CreatorId);
      SELECT LAST_INSERT_ID();";
      return _db.ExecuteScalar<int>(sql, newKeep);
    }

    public IEnumerable<Keep> GetKeepsByProfile(string profileId)
    {
      string sql = @"
        SELECT
        keep.*,
        p.*
        FROM keeps keep
        JOIN profiles p ON keep.creatorId = p.id
        WHERE keep.creatorId = @profileId;";
      return _db.Query<Keep, Profile, Keep>(sql, (keep, profile) => { keep.Creator = profile; return keep; }, new { profileId }, splitOn: "id");
    }

    public bool Delete(int id)
    {
      string sql = "DELETE FROM keeps WHERE id = @Id";
      int affectedRows = _db.Execute(sql, new { id });
      return affectedRows > 0;
    }

    public IEnumerable<Keep> Get()
    {
      string sql = populateCreator;
      return _db.Query<Keep, Profile, Keep>(sql, (keep, profile) => { keep.Creator = profile; return keep; }, splitOn: "id");
    }


    public Keep GetById(int id)
    {
      string sql = @"SELECT * from keeps WHERE id = @id";
      return _db.QueryFirstOrDefault<Keep>(sql, new { id });
    }

    public void Edit(Keep editedKeep)
    {
      string sql = @"
        UPDATE keeps
        SET
        name = @Name,
        description = @Description,
        img = @Img,
        views = @Views,
        keeps = @Keeps,
        shares = @Shares,
        creatorId = @CreatorId
        WHERE id = @Id;";
      _db.Execute(sql, editedKeep);
    }
  }
}