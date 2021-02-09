using System;
using System.Collections.Generic;
using System.Linq;
using keepr.Interfaces;
using keepr.Models;
using keepr.Repositories;

namespace keepr.Services
{
  public class KeepsService
  {
    private readonly IKeepsRepository _repo;

    public KeepsService(IKeepsRepository repo)
    {
      _repo = repo;
    }


    public Keep Create(Keep newKeep)
    {
      newKeep.Id = _repo.Create(newKeep);
      return newKeep;
    }

    public IEnumerable<Keep> Get()
    {
      return _repo.Get();
    }

    public IEnumerable<Keep> GetKeepsByProfile(string profileId, string userId)
    {
      return _repo.GetKeepsByProfile(profileId).ToList().FindAll(k => k.CreatorId == profileId);
    }

    public string Delete(int id, string userId)
    {
      Keep foundKeep = this.GetById(id, userId);

      if (userId != foundKeep.CreatorId)
      {
        throw new Exception("You are not the creator of this keep.");
      }

      if (_repo.Delete(id))
      {
        return "Deleted keep successfully.";
      }
      else
      {
        throw new Exception("Cannot delete. Invalid id.");
      }
    }

    public Keep GetById(int id, string userId)
    {
      Keep foundKeep = _repo.GetById(id);
      if (foundKeep == null)
      {
        throw new Exception("There is no keep with that id.");
      }
      foundKeep.Views += 1;
      this.UpdateViews(foundKeep);
      return foundKeep;
    }

    private void UpdateViews(Keep editedKeep)
    {
      _repo.Edit(editedKeep);
    }

    public Keep Edit(Keep editedKeep, string userId)
    {
      Keep original = _repo.GetById(editedKeep.Id);
      if (original == null) { throw new Exception("There is no keep with that id."); }
      if (original.CreatorId != userId)
      {
        throw new Exception("You do not have permission to perform this action.");
      }
      editedKeep.CreatorId = original.CreatorId;
      if (editedKeep.Name == null)
      {
        editedKeep.Name = original.Name;
      }
      if (editedKeep.Description == null)
      {
        editedKeep.Description = original.Description;
      }
      if (editedKeep.Img == null)
      {
        editedKeep.Img = original.Img;
      }
      _repo.Edit(editedKeep);
      Keep updatedKeep = _repo.GetById(editedKeep.Id);
      if (updatedKeep.Views == 0)
      {
        updatedKeep.Views = original.Views;
      }
      if (updatedKeep.Keeps == 0)
      {
        updatedKeep.Keeps = original.Keeps;
      }
      if (updatedKeep.Shares == 0)
      {
        updatedKeep.Shares = original.Shares;
      }
      return updatedKeep;
    }
  }
}