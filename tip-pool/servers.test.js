describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('create table row element passed to appendTd with input value', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);

    updateServerTable();

    expect(serverTbody.childElementCount).toEqual(1);
  }); 

  afterEach(function() {
    allServers = {};
    serverId = 0;
    document.querySelector("#serverTable").replaceChild(document.createElement("tbody"), document.querySelector("#serverTable tbody"));
  });
});
