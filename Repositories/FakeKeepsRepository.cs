using System.Collections.Generic;
using keepr.Interfaces;
using keepr.Models;

namespace keepr.Repositories
{
  public class FakeKeepsRepository : IKeepsRepository
  {
    public int Create(Keep newKeep)
    {
      return 1;
    }

    public bool Delete(int id)
    {
      return true;
    }

    public void Edit(Keep editedKeep)
    {
    }

    public IEnumerable<Keep> Get()
    {
      Keep keep1 = new Keep();
      Keep keep2 = new Keep();
      Keep keep3 = new Keep();
      List<Keep> KeepList = new List<Keep>();
      KeepList.Add(keep1);
      KeepList.Add(keep2);
      KeepList.Add(keep3);
      return KeepList;
    }

    public Keep GetById(int id)
    {
      Keep keep1 = new Keep();
      return keep1;
    }

    public IEnumerable<Keep> GetKeepsByProfile(string profileId)
    {
      Keep keep1 = new Keep();
      Keep keep2 = new Keep();
      Keep keep3 = new Keep();
      List<Keep> KeepList = new List<Keep>();
      KeepList.Add(keep1);
      KeepList.Add(keep2);
      KeepList.Add(keep3);
      return KeepList;
    }
  }
}