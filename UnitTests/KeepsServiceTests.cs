using Xunit;
using keepr.Services;
using keepr.Models;
using System.Collections.Generic;
using keepr.Repositories;

namespace keepr
{
  public class KeepsServiceTests
  {


    [Fact]
    public void Get_Returns_A_List_Of_Keeps()
    {
      var repo = new FakeKeepsRepository();
      var service = new KeepsService(repo);
      IEnumerable<Keep> keepList = service.Get();
      Assert.IsType<List<Keep>>(keepList);
    }

    [Fact]
    public void Create_Returns_A_Keep_With_Int_Id()
    {
      var repo = new FakeKeepsRepository();
      var service = new KeepsService(repo);
      Keep newKeep = new Keep();
      newKeep = service.Create(newKeep);
      Assert.IsType<int>(newKeep.Id);
    }

    [Fact]
    public void Successful_Delete_Returns_A_String()
    {
      var repo = new FakeKeepsRepository();
      var service = new KeepsService(repo);
      int keepId = 1;
      string userId = "abc";
      Assert.IsType<string>(service.Delete(keepId, userId));
    }
  }
}
