using System;
using System.Collections.Generic;
using System.Data;
using Dapper;
using keepr.Models;

namespace keepr.Repositories
{
  public class VaultKeepsRepository
  {
    private readonly IDbConnection _db;

    public VaultKeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    public int Create(VaultKeep newVk)
    {
      string sql = @"
        INSERT INTO vaultkeeps
        (vaultId, keepId, creatorId)
        VALUES
        (@VaultId, @KeepId, @CreatorId);
        SELECT LAST_INSERT_ID();";
      return _db.ExecuteScalar<int>(sql, newVk);
    }

    public IEnumerable<Keep> GetKeepsByVaultId(int vaultId)
    {
      string sql = @"
        SELECT k.*,
        vk.id as VaultKeepId,
        p.*
        FROM vaultkeeps vk
        JOIN keeps k ON k.id = vk.keepId
        JOIN profiles p ON p.id = k.creatorId
        WHERE vaultId = @vaultId;";
      return _db.Query<VaultKeepViewModel, Profile, VaultKeepViewModel>(sql, (keep, profile) => { keep.Creator = profile; return keep; }, new { vaultId }, splitOn: "id");
    }

    public VaultKeep GetById(int id)
    {
      string sql = @"SELECT * from vaultkeeps WHERE id = @id";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, new { id });
    }

    public bool Delete(int id)
    {
      string sql = "DELETE from vaultkeeps WHERE id = @id";
      int valid = _db.Execute(sql, new { id });
      return valid > 0;
    }
  }
}