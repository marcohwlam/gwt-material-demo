$wnd.gwtmaterialdemo.runAsyncCallback45("function $add_32(this$static, child){\n  $add_9(this$static.container, child);\n}\n\nfunction MaterialParallax(){\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['parallax-container']));\n  this.container = new Div;\n  $add_9(this, this.container);\n  $setStyleName(this.container, 'parallax');\n}\n\ndefineClass(413, 25, $intern_61, MaterialParallax);\n_.add_0 = function add_39(child){\n  $add_32(this, child);\n}\n;\n_.onLoad = function onLoad_27(){\n  $onLoad_0(this);\n  $wnd.$($getElement(this.container)).parallax();\n}\n;\nfunction $add_35(this$static, child){\n  $add_9(this$static.container, child);\n}\n\nfunction $build_28(this$static){\n  $setDisplay(this$static, ($clinit_Display() , NONE_3));\n  $setWidth_0(this$static.container, '100%');\n  $getElement(this$static.container).style['marginTop'] = ($clinit_Style$Unit() , '15.0%');\n  $add_9(this$static, this$static.container);\n  $add_9(this$static, this$static.progress_0);\n}\n\nfunction MaterialSplashScreen(){\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['splash-screen']));\n  this.container = new Div;\n  this.progress_0 = new MaterialProgress;\n  $build_28(this);\n}\n\ndefineClass(2214, 25, $intern_61, MaterialSplashScreen);\n_.add_0 = function add_42(child){\n  $add_35(this, child);\n}\n;\nfunction ShowcasePresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(890, 57, $intern_54, ShowcasePresenter);\n_.onReveal = function onReveal_68(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Showcase', 'Great Example showcases about the implementation of Material Design in GWT', '', ''));\n}\n;\nvar Lgwt_material_design_demo_client_application_showcase_ShowcasePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.showcase', 'ShowcasePresenter', 890);\nfunction $onSplashscreen(this$static){\n  var t;\n  $setDisplay(this$static.splash, ($clinit_Display() , BLOCK_0));\n  t = new ShowcaseView$1(this$static);\n  $schedule(t, 3000);\n}\n\nfunction ShowcaseView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_35(new ShowcaseView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(1276, 60, $intern_55, ShowcaseView);\nvar Lgwt_material_design_demo_client_application_showcase_ShowcaseView_2_classLit = createForClass('gwt.material.design.demo.client.application.showcase', 'ShowcaseView', 1276);\nfunction ShowcaseView$1(this$0){\n  this.this$01 = this$0;\n  Timer.call(this);\n}\n\ndefineClass(1277, 135, {}, ShowcaseView$1);\n_.run = function run_16(){\n  $setDisplay(this.this$01.splash, ($clinit_Display() , NONE_3));\n}\n;\nvar Lgwt_material_design_demo_client_application_showcase_ShowcaseView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.showcase', 'ShowcaseView/1', 1277);\nfunction $build_f_HTMLPanel1_35(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow6, f_MaterialRow12, f_MaterialRow24, f_MaterialTitle3, f_MaterialAnchorButton4, splash, f_MaterialImage7, f_MaterialTitle8, f_MaterialTitle9, btnSplashScreen, f_PrettyPre10, sb, f_PrettyPre11, sb_0, f_MaterialTitle13, f_MaterialPanel14, f_MaterialParallax15, f_MaterialTitle17, f_MaterialParallax18, f_MaterialTitle20, f_MaterialParallax21, f_PrettyPre23, f_MaterialTitle25, f_MaterialRow26, f_MaterialColumn27, f_MaterialPanel28, f_PrettyPre36, sb_1, f_PrettyPre37, sb_2, f_MaterialImage16, f_MaterialImage19, f_MaterialImage22, sb_3, f_MaterialPanel29, f_MaterialImage30, f_MaterialTextBox31, f_MaterialTextBox32, btnLogin, f_MaterialRow33, f_MaterialColumn34, f_MaterialCheckBox35;\n  f_HTMLPanel1 = new HTMLPanel($html6_0(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_12(f_MaterialTitle3.paragraph, 'With the power of MaterialPathAnimator (Addin), MaterialAnimator (Core) animation libraries, you can now apply delightful animations on card and FAB.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Card (FAB) with Delightful Animations'))).html_0)) , fire_5(f_MaterialTitle3, 'Card (FAB) with Delightful Animations') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (f_MaterialAnchorButton4 = new MaterialAnchorButton , $setText_8(f_MaterialAnchorButton4.span_1, 'Source') , f_MaterialAnchorButton4.span_1.attached || $add_9(f_MaterialAnchorButton4, f_MaterialAnchorButton4.span_1) , f_MaterialAnchorButton4.element_0.setAttribute('href', 'https://github.com/GwtMaterialDesign/gwt-material-demo/tree/master/src/main/java/gwt/material/design/demo/client/application/showcase/pathanimator') , $setTextColor(f_MaterialAnchorButton4, ($clinit_Color() , WHITE)) , f_MaterialAnchorButton4.element_0.setAttribute('target', '_blank') , f_MaterialAnchorButton4)) , $add_9(f_MaterialRow2, new PathAnimatorShowcase) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow6 = new MaterialRow , $add_9(f_MaterialRow6, (splash = new MaterialSplashScreen , $add_35(splash, (f_MaterialImage7 = new MaterialImage , $setResource(f_MaterialImage7, ($clinit_MaterialResources_default_InlineClientBundleGenerator() , $clinit_MaterialResources_default_InlineClientBundleGenerator$ic_splashInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator() , ic_splash)) , f_MaterialImage7.element_0.style['width'] = '300px' , f_MaterialImage7)) , $add_35(splash, (f_MaterialTitle8 = new MaterialTitle , $setText_12(f_MaterialTitle8.paragraph, 'Material Design Look and Feel for GWT Apps') , $setInnerHTML($getElement(f_MaterialTitle8.header), (new SafeHtmlString(htmlEscape('gwt-material'))).html_0) , fire_5(f_MaterialTitle8, 'gwt-material') , f_MaterialTitle8)) , $setTextAlign(splash, ($clinit_TextAlign() , CENTER_4)) , $setTextColor(splash, WHITE) , this$static.owner.splash = splash , splash)) , $add_9(f_MaterialRow6, (f_MaterialTitle9 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle9.header), (new SafeHtmlString(htmlEscape('SplashScreen'))).html_0) , fire_5(f_MaterialTitle9, 'SplashScreen') , f_MaterialTitle9)) , $add_9(f_MaterialRow6, (btnSplashScreen = new MaterialButton , $setWaves(btnSplashScreen, ($clinit_WavesType() , LIGHT)) , $setText_8(btnSplashScreen.span_1, 'Demo') , btnSplashScreen.span_1.attached || $add_9(btnSplashScreen, btnSplashScreen.span_1) , $addClickHandler(btnSplashScreen, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , btnSplashScreen)) , $add_9(f_MaterialRow6, (f_PrettyPre10 = new PrettyPre , $setHTML_0(f_PrettyPre10, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialSplashScreen ui:field=\"splash\" textColor=\"WHITE\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialImage resource=\"{res.ic_splash}\" width=\"300px\"/&gt;<br> \\u2003&lt;m:MaterialTitle title=\"gwt-material\" description=\"Material Design Look and Feel for GWT Apps\" /&gt;<br> &lt;/m:MaterialSplashScreen&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre10.element_0, 'lang-xml', true) , setStyleName(f_PrettyPre10.element_0, 'z-depth-1', true) , f_PrettyPre10)) , $add_9(f_MaterialRow6, (f_PrettyPre11 = new PrettyPre , $setHTML_0(f_PrettyPre11, (sb_0 = new StringBuilder , sb_0.string += '\\u2003splash.show();<br> Timer t = new Timer() {<br> \\u2003@Override<br> \\u2003\\u2003public void run() {<br> \\u2003\\u2003\\u2003splash.hide();<br> \\u2003\\u2003}<br> \\u2003};<br> t.schedule(3000);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre11.element_0, 'lang-xml', true) , setStyleName(f_PrettyPre11.element_0, 'z-depth-1', true) , f_PrettyPre11)) , setStyleName(f_MaterialRow6.element_0, 'code', true) , f_MaterialRow6), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow12 = new MaterialRow , $add_9(f_MaterialRow12, (f_MaterialTitle13 = new MaterialTitle , $setText_12(f_MaterialTitle13.paragraph, \"Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling. Check out the demo to get a better idea of it.'\") , $setInnerHTML($getElement(f_MaterialTitle13.header), (new SafeHtmlString(htmlEscape('Parallax'))).html_0) , fire_5(f_MaterialTitle13, 'Parallax') , f_MaterialTitle13)) , $add_9(f_MaterialRow12, (f_MaterialPanel14 = new MaterialPanel , $add_9(f_MaterialPanel14, (f_MaterialParallax15 = new MaterialParallax , $add_32(f_MaterialParallax15, (f_MaterialImage16 = new MaterialImage , $setValue_10(f_MaterialImage16, 'https://i.imgur.com/CiPPh6h.jpg', true) , f_MaterialImage16)) , f_MaterialParallax15.element_0.style['height'] = '300px' , f_MaterialParallax15)) , $add_9(f_MaterialPanel14, (f_MaterialTitle17 = new MaterialTitle , $setText_12(f_MaterialTitle17.paragraph, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , $setInnerHTML($getElement(f_MaterialTitle17.header), (new SafeHtmlString(htmlEscape('Sample'))).html_0) , fire_5(f_MaterialTitle17, 'Sample') , f_MaterialTitle17)) , $add_9(f_MaterialPanel14, (f_MaterialParallax18 = new MaterialParallax , $add_32(f_MaterialParallax18, (f_MaterialImage19 = new MaterialImage , $setValue_10(f_MaterialImage19, 'https://i.imgur.com/CiPPh6h.jpg', true) , f_MaterialImage19)) , f_MaterialParallax18.element_0.style['height'] = '300px' , f_MaterialParallax18)) , $add_9(f_MaterialPanel14, (f_MaterialTitle20 = new MaterialTitle , $setText_12(f_MaterialTitle20.paragraph, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.') , $setInnerHTML($getElement(f_MaterialTitle20.header), (new SafeHtmlString(htmlEscape('Sample'))).html_0) , fire_5(f_MaterialTitle20, 'Sample') , f_MaterialTitle20)) , $add_9(f_MaterialPanel14, (f_MaterialParallax21 = new MaterialParallax , $add_32(f_MaterialParallax21, (f_MaterialImage22 = new MaterialImage , $setValue_10(f_MaterialImage22, 'https://i.imgur.com/CiPPh6h.jpg', true) , f_MaterialImage22)) , f_MaterialParallax21.element_0.style['height'] = '300px' , f_MaterialParallax21)) , $add_9(f_MaterialPanel14, (f_PrettyPre23 = new PrettyPre , $setHTML_0(f_PrettyPre23, (sb_3 = new StringBuilder , sb_3.string += '&lt;m:MaterialParallax height=\"300px\"&gt;<br> &lt;m:MaterialImage url=\"https://i.imgur.com/CiPPh6h.jpg\" /&gt;<br> &lt;/m:MaterialParallax&gt;<br><br>  &lt;m:MaterialTitle title=\"Sample\" description=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \"/&gt;<br><br>  &lt;m:MaterialParallax height=\"300px\"&gt;<br> &lt;m:MaterialImage url=\"https://i.imgur.com/CiPPh6h.jpg\" /&gt;<br> &lt;/m:MaterialParallax&gt;<br><br>  &lt;m:MaterialTitle title=\"Sample\" description=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \"/&gt;<br><br>  &lt;m:MaterialParallax height=\"300px\"&gt;<br> &lt;m:MaterialImage url=\"https://i.imgur.com/CiPPh6h.jpg\" /&gt;<br> &lt;/m:MaterialParallax&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre23.element_0, 'lang-xml', true) , setStyleName(f_PrettyPre23.element_0, 'z-depth-1', true) , f_PrettyPre23)) , setStyleName(f_MaterialPanel14.element_0, 'CWDTSS-s-e', true) , $setId_1((!f_MaterialPanel14.idMixin && (f_MaterialPanel14.idMixin = new IdMixin(f_MaterialPanel14)) , f_MaterialPanel14.idMixin), 'parallax_demo') , f_MaterialPanel14)) , setStyleName(f_MaterialRow12.element_0, 'code', true) , f_MaterialRow12), $get_0(this$static.domId2Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow24 = new MaterialRow , $add_9(f_MaterialRow24, (f_MaterialTitle25 = new MaterialTitle , $setText_12(f_MaterialTitle25.paragraph, \"Here is an example of GWT Material Design UI with card base interface'\") , $setInnerHTML($getElement(f_MaterialTitle25.header), (new SafeHtmlString(htmlEscape('Login UI'))).html_0) , fire_5(f_MaterialTitle25, 'Login UI') , f_MaterialTitle25)) , $add_9(f_MaterialRow24, (f_MaterialRow26 = new MaterialRow , $add_9(f_MaterialRow26, (f_MaterialColumn27 = new MaterialColumn , $add_9(f_MaterialColumn27, (f_MaterialPanel28 = new MaterialPanel , $add_9(f_MaterialPanel28, (f_MaterialPanel29 = new MaterialPanel , $add_9(f_MaterialPanel29, (f_MaterialImage30 = new MaterialImage , setStyleName(f_MaterialImage30.element_0, 'CWDTSS-s-b', true) , setStyleName(f_MaterialImage30.element_0, 'z-depth-1', true) , $setType_1(f_MaterialImage30, ($clinit_ImageType() , CIRCLE_0)) , $setValue_10(f_MaterialImage30, 'https://i.imgur.com/SHPWRjb.jpg', true) , f_MaterialImage30)) , $add_9(f_MaterialPanel29, (f_MaterialTextBox31 = new MaterialTextBox , $getElement(f_MaterialTextBox31.valueBoxBase).setAttribute('placeholder', 'Email') , $getText_1(f_MaterialTextBox31.label_1).length == 0 || $setStyleName(f_MaterialTextBox31.label_1, 'active') , $setType_2(f_MaterialTextBox31, ($clinit_InputType() , EMAIL_0)) , f_MaterialTextBox31)) , $add_9(f_MaterialPanel29, (f_MaterialTextBox32 = new MaterialTextBox , $getElement(f_MaterialTextBox32.valueBoxBase).setAttribute('placeholder', 'Password') , $getText_1(f_MaterialTextBox32.label_1).length == 0 || $setStyleName(f_MaterialTextBox32.label_1, 'active') , $setType_2(f_MaterialTextBox32, PASSWORD) , f_MaterialTextBox32)) , $add_9(f_MaterialPanel29, (btnLogin = new MaterialButton , $setWaves(btnLogin, LIGHT) , btnLogin.element_0.style['width'] = '100%' , $setText_8(btnLogin.span_1, 'Log In') , btnLogin.span_1.attached || $add_9(btnLogin, btnLogin.span_1) , btnLogin)) , $add_9(f_MaterialPanel29, (f_MaterialRow33 = new MaterialRow , $add_9(f_MaterialRow33, (f_MaterialColumn34 = new MaterialColumn , $add_9(f_MaterialColumn34, (f_MaterialCheckBox35 = new MaterialCheckBox , $setTextOrHtml(f_MaterialCheckBox35.directionalTextHelper, 'Keep me logged in') , f_MaterialCheckBox35)) , $setGrid_0((!f_MaterialColumn34.gridMixin && (f_MaterialColumn34.gridMixin = new GridMixin(f_MaterialColumn34)) , f_MaterialColumn34.gridMixin), 's12 m12 l6') , f_MaterialColumn34)) , setStyleName(f_MaterialRow33.element_0, 'CWDTSS-s-f', true) , f_MaterialRow33)) , setStyleName(f_MaterialPanel29.element_0, 'CWDTSS-s-a', true) , f_MaterialPanel29)) , setStyleName(f_MaterialPanel28.element_0, 'CWDTSS-s-d', true) , $setShadow_0((!f_MaterialPanel28.shadowMixin && (f_MaterialPanel28.shadowMixin = new ShadowMixin(f_MaterialPanel28)) , f_MaterialPanel28.shadowMixin), 1) , f_MaterialPanel28)) , $setOffset_0((!f_MaterialColumn27.gridMixin && (f_MaterialColumn27.gridMixin = new GridMixin(f_MaterialColumn27)) , f_MaterialColumn27.gridMixin), 'l4') , $setGrid_0((!f_MaterialColumn27.gridMixin && (f_MaterialColumn27.gridMixin = new GridMixin(f_MaterialColumn27)) , f_MaterialColumn27.gridMixin), 's12 m8 l6') , f_MaterialColumn27)) , setStyleName(f_MaterialRow26.element_0, 'CWDTSS-s-c', true) , $setBackgroundColor(f_MaterialRow26, GREY_LIGHTEN_4) , f_MaterialRow26)) , $add_9(f_MaterialRow24, (f_PrettyPre36 = new PrettyPre , $setHTML_0(f_PrettyPre36, (sb_1 = new StringBuilder , sb_1.string += '\\u2003.panel{<br> \\u2003\\u2003background: url(\"https://2.bp.blogspot.com/-x4D3EPELYRU/VMHu52a4qUI/AAAAAAAAHek/EmnIgqTtu_U/s0/fon116%2B2160x1920.png\");<br> \\u2003\\u2003background-size: 100%;<br> \\u2003\\u2003padding: 0px !important;<br> \\u2003\\u2003padding-top: 40% !important;<br> }<br> .fieldPanel{<br> \\u2003\\u2003background: white;<br> \\u2003\\u2003padding: 6%;<br> }<br> .imgProfile{<br> \\u2003\\u2003margin-top: -120px;<br> \\u2003\\u2003width: 40%;<br> \\u2003\\u2003margin-left: 30%;<br> \\u2003\\u2003border: 5px solid #fff;<br> }<br> .rowAction{<br> \\u2003\\u2003margin-top: 20px;<br> }<br> .login_demo{<br> \\u2003\\u2003padding: 5%;<br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre36.element_0, 'lang-css', true) , setStyleName(f_PrettyPre36.element_0, 'z-depth-1', true) , f_PrettyPre36)) , $add_9(f_MaterialRow24, (f_PrettyPre37 = new PrettyPre , $setHTML_0(f_PrettyPre37, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialRow backgroundColor=\"GREY_LIGHTEN_4\" addStyleNames=\"{style.login_demo}\"&gt;<br> \\u2003&lt;m:MaterialColumn grid=\"s12 m8 l6\" offset=\"l4\" &gt;<br> \\u2003\\u2003&lt;m:MaterialPanel shadow=\"1\" addStyleNames=\"{style.panel}\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialPanel addStyleNames=\"{style.fieldPanel}\"&gt;<br> \\u2003\\u2003\\u2003\\u2003&lt;m:MaterialImage url=\"https://i.imgur.com/SHPWRjb.jpg\" type=\"CIRCLE\" addStyleNames=\"{style.imgProfile} z-depth-1\"/&gt;<br> \\u2003\\u2003\\u2003\\u2003&lt;m:MaterialTextBox type=\"EMAIL\" placeholder=\"Email\"/&gt;<br> \\u2003\\u2003\\u2003\\u2003&lt;m:MaterialTextBox type=\"PASSWORD\" placeholder=\"Password\" /&gt;<br> \\u2003\\u2003\\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnLogin\" waves=\"LIGHT\" text=\"Log In\" width=\"100%\"/&gt;<br>  \\u2003\\u2003\\u2003\\u2003&lt;m:MaterialRow addStyleNames=\"{style.rowAction}\"&gt;<br> \\u2003\\u2003\\u2003\\u2003\\u2003&lt;m:MaterialColumn grid=\"s12 m12 l6\"&gt;<br> \\u2003\\u2003\\u2003\\u2003\\u2003\\u2003&lt;m:MaterialCheckBox text=\"Keep me logged in\"/&gt;<br> \\u2003\\u2003\\u2003\\u2003\\u2003&lt;/m:MaterialColumn&gt;<br> \\u2003\\u2003\\u2003\\u2003&lt;/m:MaterialRow&gt;<br> \\u2003\\u2003\\u2003&lt;/m:MaterialPanel&gt;<br> \\u2003\\u2003&lt;/m:MaterialPanel&gt;<br> \\u2003&lt;/m:MaterialColumn&gt;<br> &lt;/m:MaterialRow&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre37.element_0, 'lang-xml', true) , setStyleName(f_PrettyPre37.element_0, 'z-depth-1', true) , f_PrettyPre37)) , setStyleName(f_MaterialRow24.element_0, 'code', true) , f_MaterialRow24), $get_0(this$static.domId3Element));\n  return f_HTMLPanel1;\n}\n\nfunction ShowcaseView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ShowcaseView_BinderImpl$Widgets$1(this);\n  this.owner = owner;\n  this.style_0 = ($clinit_ShowcaseView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_20);\n  $ensureInjected_19(this.style_0);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n}\n\ndefineClass(1715, 1, {}, ShowcaseView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_showcase_ShowcaseView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.showcase', 'ShowcaseView_BinderImpl/Widgets', 1715);\nfunction ShowcaseView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1716, 1, $intern_64, ShowcaseView_BinderImpl$Widgets$1);\n_.onClick_0 = function onClick_281(event_0){\n  $onSplashscreen(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_showcase_ShowcaseView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.showcase', 'ShowcaseView_BinderImpl/Widgets/1', 1716);\nvar style_20;\nfunction $ensureInjected_19(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    inject(($clinit_LocaleInfo() , '.CWDTSS-s-e{position:relative;top:0;left:0;right:0;bottom:0;z-index:2;background:#fff}.CWDTSS-s-d{background:url(https://2.bp.blogspot.com/-x4D3EPELYRU/VMHu52a4qUI/AAAAAAAAHek/EmnIgqTtu_U/s0/fon116%2B2160x1920.png);background-size:100%;padding:0!important;padding-top:40%!important}.CWDTSS-s-a{background:white;padding:6%}.CWDTSS-s-b{margin-top:-120px;width:40%;margin-left:30%;border:5px solid #fff}.CWDTSS-s-f{margin-top:20px}.CWDTSS-s-c{padding:5%}'));\n    return true;\n  }\n  return false;\n}\n\nfunction ShowcaseView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(2213, 1, {}, ShowcaseView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_165(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_showcase_ShowcaseView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.showcase', 'ShowcaseView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 2213);\nfunction $clinit_ShowcaseView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_ShowcaseView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_20 = new ShowcaseView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html6_0(arg0, arg1, arg2, arg3){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_1(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$showcase$ShowcasePresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$showcase$ShowcasePresenter$_annotation$$none$$) {\n    result0 = new ShowcasePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$showcase$ShowcaseView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$showcase$ShowcasePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$showcase$ShowcasePresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$showcase$ShowcasePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$showcase$ShowcaseView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$showcase$ShowcaseView$_annotation$$none$$) {\n    result = new ShowcaseView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$showcase$ShowcaseView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$showcase$ShowcaseView$_annotation$$none$$;\n}\n\ndefineClass(799, 1, $intern_109);\n_.onSuccess_0 = function onSuccess_46(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$showcase$ShowcasePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\nvar ic_splash;\nfunction $clinit_MaterialResources_default_InlineClientBundleGenerator$ic_splashInitializer(){\n  $clinit_MaterialResources_default_InlineClientBundleGenerator$ic_splashInitializer = emptyMethod;\n  $clinit_MaterialResources_default_InlineClientBundleGenerator();\n  ic_splash = new ImageResourcePrototype('ic_splash', ($clinit_UriUtils() , new SafeUriString('data:image/png;base64,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')));\n}\n\n$entry(onLoad_0)(45);\n\n//# sourceURL=gwtmaterialdemo-45.js\n")
