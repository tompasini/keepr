using System;
using keepr.Models;
using keepr.Repositories;

namespace keepr.Services
{
  public class ProfileService
  {
    private readonly ProfileRepository _repo;

    public ProfileService(ProfileRepository repo)
    {
      _repo = repo;
    }

    public Profile GetOrCreateProfile(Profile userInfo)
    {
      Profile foundProfile = _repo.GetByEmail(userInfo.Email);
      if (foundProfile == null)
      {
        return _repo.Create(userInfo);
      }
      return foundProfile;
    }

    public Profile GetById(string id)
    {
      Profile foundProfile = _repo.GetById(id);
      if (foundProfile == null)
      {
        throw new Exception("There is no profile with that id.");
      }
      return foundProfile;
    }
  }
}