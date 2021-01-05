using System;
using System.Collections.Generic;
using System.Linq;
using keepr.Models;
using keepr.Repositories;

namespace keepr.Services
{
  public class VaultKeepsService
  {
    private readonly VaultKeepsRepository _repo;
    private readonly VaultsRepository _vaultrepo;

    private readonly KeepsRepository _keeprepo;

    public VaultKeepsService(VaultKeepsRepository repo, VaultsRepository vaultrepo, KeepsRepository keeprepo)
    {
      _repo = repo;
      _vaultrepo = vaultrepo;
      _keeprepo = keeprepo;
    }

    public VaultKeep Create(VaultKeep newVk)
    {

      Vault foundVault = _vaultrepo.GetById(newVk.VaultId);

      if (foundVault.CreatorId != newVk.CreatorId)
      {
        throw new Exception("This is not your vault.");
      }

      newVk.Id = _repo.Create(newVk);
      Keep keptKeep = _keeprepo.GetById(newVk.KeepId);
      keptKeep.Keeps += 1;
      this.UpdateKeeps(keptKeep);
      return newVk;
    }

    private void UpdateKeeps(Keep editedKeep)
    {
      _keeprepo.Edit(editedKeep);
    }

    public IEnumerable<Keep> GetKeepsByVaultId(int vaultId, string userId)
    {
      Vault foundVault = _vaultrepo.GetById(vaultId);

      if (foundVault == null)
      {
        throw new Exception("There is no vault with that id.");
      }

      if (foundVault.CreatorId != userId && foundVault.IsPrivate == true)
      {
        throw new Exception("This vault is private.");
      }

      return _repo.GetKeepsByVaultId(vaultId);

    }

    public string Delete(int id, string userId)
    {
      VaultKeep original = _repo.GetById(id);
      if (original == null) { throw new Exception("This is not a valid id."); }
      if (original.CreatorId != userId)
      {
        throw new Exception("You do not have permission to perform this action.");
      }
      if (_repo.Delete(id))
      {
        return "Deleted succesfully.";
      }
      return "Did not delete succesfully.";
    }
  }
}