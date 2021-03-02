var renderClass = "jp.ngt.rtm.render.SignalPartsRenderer";
importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);


function init(par1, par2) {
    body = renderer.registerParts(new Parts("body"));
    light = renderer.registerParts(new Parts("light"));
}


function render(entity, pass, par3) {
    var signal = entity==null? 0 : entity.getSignal();
  
    if(pass == 0) {
      body.render(renderer);
    };
  
    if(pass == 2) {
      switch (signal) {
        case 0:
            break;
  
        case 1:
            light.render(renderer);
            break;
      };
    }
  }