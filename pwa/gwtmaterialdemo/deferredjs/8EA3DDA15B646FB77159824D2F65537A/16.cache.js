$wnd.gwtmaterialdemo.runAsyncCallback16("function y5b(){}\nfunction D5b(){}\nfunction Lyd(){}\nfunction Nyd(a){this.a=a}\nfunction Pyd(a){this.a=a}\nfunction A5b(a){this.a=a}\nfunction G5b(){G5b=Vqb;C5b=new D5b}\nfunction Wyd(a){var b;if(!a.d){b=new Kyd;a.d=b}return a.d}\nfunction Iyd(a){_bd(fcd(new gcd,(Mdd(),qdd)),a.b,null)}\nfunction Jyd(a){_bd(fcd(new gcd,(Mdd(),Qcd)),a.a,null)}\nfunction Byd(a,b,c){Ayd();qFb.call(this,a,b,c,(aid(),$hd))}\nfunction Syd(a){this.c=a;this.a=at($doc);this.b=new Dsb(this.a)}\nfunction z5b(a,b){w5b();var c;c=new y5b;c.b=a;c.a=b;c.c=100;x5b(c)}\nfunction w5b(){w5b=Vqb;!oLb&&(oLb=new pLb);scc();wcc((G5b(),C5b),true,false)}\nfunction Tyd(a){var b;b=new Mwe;b.a+=MRe;Lwe(b,nsb(a));b.a+=PRe;return new Wrb(b.a)}\nfunction Vyd(a){var b,c;if(!a.c){c=new Byd(eCb($Fb(a.a)),(b=Wyd(a),b),Uyd(a));LEb((bGb(a.a),c),YHb(bGb(a.a)));a.c=c}return a.c}\nfunction x5b(a){var b;if(a.b){b=(Usb(),at($doc));zs(a.b,b);$wnd.apply('#'+b,a.c,Wqb(A5b.prototype.uf,A5b,[a.a]))}else{new Ave;gs()}}\nfunction Kyd(){IFb.call(this);GFb(this,Ryd(new Syd(this)));w5b();z5b(ho(this.c),Wqb(Lyd.prototype.uf,Lyd,[]));z5b(ho(this.b),Wqb(Nyd.prototype.uf,Nyd,[this]));z5b(ho(this.a),Wqb(Pyd.prototype.uf,Pyd,[this]))}\nfunction Ryd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=new cxb(Tyd(a.a).a);b=Fsb((Usb(),c.rb));Csb(a.b);b.b?js(b.b,b.a,b.c):Hsb(b.a);axb(c,(d=new b0b,tLb(d,(e=new Tad,eed(e.b,''),As(ho(e.a),(msb(),(new asb(nsb(KSe))).a)),jA(e,KSe),e)),tLb(d,(f=new Hbc,a.c.c=f,f)),tLb(d,(g=new lme,ged(g,(h=new Mwe,h.a+='\\u2003MaterialScrollfire.apply(panel.getElement(), () -&gt; { <br> \\u2003MaterialToast.fireToast(\"Toasted\"); <br> }); <br> MaterialScrollfire.apply(listContainer.getElement(), () -&gt; { <br> \\u2003MaterialAnimator.animate(Transition.SHOW_STAGGERED_LIST, listContainer, 0); <br> }); <br> MaterialScrollfire.apply(image.getElement(), () -&gt; { <br> \\u2003MaterialAnimator.animate(Transition.FADE_IN_IMAGE, image, 0); <br> });',new Wrb(h.a)).a),yo(g.rb,RSe,true),g)),tLb(d,(i=new A2b,z2b(i,(j=new h9c,tLb(j,(k=new Tad,eed(k.b,UWe),As(ho(k.a),(new asb(nsb(UWe))).a),jA(k,UWe),k)),j.rb.style.opacity=0,j)),z2b(i,(l=new h9c,tLb(l,(m=new Tad,eed(m.b,UWe),As(ho(m.a),(new asb(nsb(UWe))).a),jA(m,UWe),m)),l.rb.style.opacity=0,l)),z2b(i,(n=new h9c,tLb(n,(o=new Tad,eed(o.b,UWe),As(ho(o.a),(new asb(nsb(UWe))).a),jA(o,UWe),o)),n.rb.style.opacity=0,n)),z2b(i,(p=new h9c,tLb(p,(q=new Tad,eed(q.b,UWe),As(ho(q.a),(new asb(nsb(UWe))).a),jA(q,UWe),q)),p.rb.style.opacity=0,p)),a.c.b=i,i)),tLb(d,(r=new cVb,_Ub(r,(Eke(),mle(),Eke(),Rje)),r.rb.setAttribute(WWe,XWe),r.rb.style.opacity=0,a.c.a=r,r)),yo(d.rb,ePe,true),d),Csb(a.b));return c}\nvar g5e='gwt.material.design.addins.client.scrollfire';Uqb(2183,1,{},y5b);_.c=100;var QO=Xue(g5e,'MaterialScrollfire',2183);Uqb(2988,$wnd.Function,{},A5b);_.uf=function B5b(){this.a.call(null)};var C5b;Uqb(2305,1,{},D5b);_.Gd=function E5b(){return 'scrollfireJs'};_.Hd=function F5b(){return 'function apply(selector, offset, callback) {var didScroll = false; var done = false; var callbacks = $.Callbacks(); window.addEventListener(\"scroll\", function() {didScroll = true; }); setInterval(function() {if(didScroll) {didScroll = false; var windowScroll = window.pageYOffset + window.innerHeight; var currentElement = document.querySelector(selector); if ( currentElement !== null) {var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset; if (windowScroll > (elementOffset + offset)) {if (done !== true) {callbacks.add(callback); callbacks.fire(); done = true; } } } } }, 100); }'};var PO=Xue(g5e,'MaterialScrollfireClientBundle_default_InlineClientBundleGenerator/1',2305);Uqb(932,54,qLe,Byd);_.ze=function Cyd(){uie();$Eb(this,new wie('Scrollfire',\"Executes callback functions depending on how far into the page you've scrolled.\",'addins/scrollfire/ScrollFireView',''))};var g3=Xue(pVe,'ScrollFirePresenter',932);Uqb(1318,62,rLe,Kyd);var i3=Xue(pVe,'ScrollFireView',1318);Uqb(2907,$wnd.Function,{},Lyd);_.uf=function Myd(){Yad(new _ad(PC(JC(dK,1),HHe,21,0,[])),'Toasted',fMe,null)};Uqb(2908,$wnd.Function,{},Nyd);_.uf=function Oyd(){Iyd(this.a)};Uqb(2909,$wnd.Function,{},Pyd);_.uf=function Qyd(){Jyd(this.a)};Uqb(1808,1,{},Syd);var h3=Xue(pVe,'ScrollFireView_BinderImpl/Widgets',1808);Uqb(784,1,fTe);_.Vc=function azd(){nJb(this.b,Vyd(this.a.a))};gHe(Eq)(16);\n//# sourceURL=gwtmaterialdemo-16.js\n")