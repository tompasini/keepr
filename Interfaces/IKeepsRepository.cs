using System.Collections.Generic;
using keepr.Models;

namespace keepr.Interfaces
{
  public interface IKeepsRepository
  {
    //get methods
    IEnumerable<Keep> Get();

    IEnumerable<Keep> GetKeepsByProfile(string profileId);

    Keep GetById(int id);
    //post, put, delete methods
    int Create(Keep newKeep);

    void Edit(Keep editedKeep);

    bool Delete(int id);
  }
}