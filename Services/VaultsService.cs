using System;
using System.Collections.Generic;
using System.Linq;
using keepr.Models;
using keepr.Repositories;

namespace keepr.Services
{
  public class VaultsService
  {

    private readonly VaultsRepository _repo;
    private readonly ProfileRepository _profilerepo;

    public VaultsService(VaultsRepository repo, ProfileRepository profilerepo)
    {
      _repo = repo;
      _profilerepo = profilerepo;
    }

    public IEnumerable<Vault> GetVaultsByProfile(string profId, string userId)
    {
      if (profId != userId)
      {
        return _repo.getVaultsByProfile(profId).ToList().FindAll(v => v.CreatorId == userId || v.IsPrivate == false);
      }
      return _repo.getVaultsByProfile(profId).ToList().FindAll(v => v.CreatorId == userId || v.IsPrivate);
    }

    public Vault Create(Vault newVault)
    {
      newVault.Id = _repo.Create(newVault);
      return newVault;
    }

    public string Delete(int id, string userId)
    {
      Vault foundVault = this.GetById(id, userId);

      if (userId != foundVault.CreatorId)
      {
        throw new Exception("You are not the creator of this vault.");
      }

      if (_repo.Delete(id))
      {
        return "Deleted vault successfully.";
      }
      else
      {
        throw new Exception("Cannot delete. Invalid id.");
      }
    }

    public Vault GetById(int id, string userId)
    {
      Vault foundVault = _repo.GetById(id);
      Profile creator = _profilerepo.GetById(foundVault.CreatorId);
      foundVault.Creator = creator;

      if (foundVault == null)
      {
        throw new Exception("There is no vault with that id.");
      }

      if (foundVault.CreatorId == userId && foundVault.IsPrivate == true)
      {
        return foundVault;
      }

      if (foundVault.IsPrivate == false)
      {
        return foundVault;
      }

      if (foundVault.CreatorId != userId && foundVault.IsPrivate == true)
      {
        throw new Exception("This vault is private.");
      }

      return foundVault;
    }

    public Vault Edit(Vault editedVault, string userId)
    {
      Vault original = _repo.GetById(editedVault.Id);
      if (original == null) { throw new Exception("There is no vault with that id."); }
      if (original.CreatorId != userId)
      {
        throw new Exception("You do not have permission to perform this action.");
      }
      editedVault.CreatorId = original.CreatorId;
      if (editedVault.Name == null)
      {
        editedVault.Name = original.Name;
      }
      if (editedVault.Description == null)
      {
        editedVault.Description = original.Description;
      }

      editedVault.IsPrivate = original.IsPrivate;
      _repo.Edit(editedVault);
      return _repo.GetById(editedVault.Id);
    }
  }
}