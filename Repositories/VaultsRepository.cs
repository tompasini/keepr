using System;
using System.Collections.Generic;
using System.Data;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
  public class VaultsRepository
  {
    private readonly IDbConnection _db;

    public VaultsRepository(IDbConnection db)
    {
      _db = db;
    }

    public IEnumerable<Vault> getVaultsByProfile(string profId)
    {
      string sql = @"
        SELECT
        vault.*,
        p.*
        FROM vaults vault
        JOIN profiles p ON vault.creatorId = p.id
        WHERE vault.creatorId = @profId; ";
      return _db.Query<Vault, Profile, Vault>(sql, (vault, profile) => { vault.Creator = profile; return vault; }, new { profId }, splitOn: "id");
    }

    public int Create(Vault newVault)
    {
      string sql = @"
      INSERT INTO vaults
      (name, description, isPrivate, creatorId)
      VALUES
      (@Name, @Description, @IsPrivate, @CreatorId);
      SELECT LAST_INSERT_ID();";
      return _db.ExecuteScalar<int>(sql, newVault);
    }

    public Vault GetById(int id)
    {
      string sql = "SELECT * FROM vaults WHERE id = @id";
      return _db.QueryFirstOrDefault<Vault>(sql, new { id });
    }

    public bool Delete(int id)
    {
      string sql = "DELETE FROM vaults WHERE id = @id";
      int affectedRows = _db.Execute(sql, new { id });
      return affectedRows > 0;
    }

    public void Edit(Vault editedVault)
    {
      string sql = @"
        UPDATE vaults
        SET
        name = @Name,
        description = @Description,
        isPrivate = @IsPrivate,
        creatorId = @CreatorId
        WHERE id = @Id;";
      _db.Execute(sql, editedVault);
    }
  }
}