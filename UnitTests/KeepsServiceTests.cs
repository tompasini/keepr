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
      KeepsService keepsService = new KeepsService(FakeKeepsRepository repo);
    }
  }
}
