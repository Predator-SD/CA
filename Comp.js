var Component=function(name,type,voltage,current,resistence){
  this.name=name;
  this.type=type;
  this.voltage=voltage;
  this.current=current;
  this.resistence=resistence;
};
var Loop=function(components){
  this.components=components;
};
Loop.prototype.type="Linear";

