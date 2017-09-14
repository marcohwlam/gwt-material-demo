$wnd.gwtmaterialdemo.runAsyncCallback33("function MaterialSlideCaption(){\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['caption']));\n}\n\ndefineClass(244, 25, $intern_60, MaterialSlideCaption);\nvar Lgwt_material_design_client_ui_MaterialSlideCaption_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialSlideCaption', 244);\nfunction MaterialSlideItem(){\n  ListItem.call(this);\n}\n\ndefineClass(241, 54, $intern_101, MaterialSlideItem);\nvar Lgwt_material_design_client_ui_MaterialSlideItem_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialSlideItem', 241);\nfunction $add_34(this$static, child){\n  $add_14(this$static.listContainer, child);\n}\n\nfunction $setFullscreen_1(this$static, fullscreen){\n  $setFullscreen(this$static.fullscreenMixin, fullscreen);\n}\n\nfunction $setHeight_2(this$static, height){\n  ($clinit_DOM() , this$static.element_0).style['height'] = height;\n  $setHeight_0(this$static.listContainer, height);\n}\n\nfunction MaterialSlider(){\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['slider']));\n  this.listContainer = new UnorderedList;\n  this.fullWidth = true;\n  this.indicators = true;\n  this.duration_0 = 500;\n  this.interval = 6000;\n  this.fullscreenMixin = new FullscreenMixin(this);\n  $setStyleName(this.listContainer, 'slides');\n  $add_9(this, this.listContainer);\n}\n\ndefineClass(591, 25, $intern_60, MaterialSlider);\n_.add_0 = function add_41(child){\n  $add_34(this, child);\n}\n;\n_.initialize_0 = function initialize_28(){\n  var options;\n  options = new $wnd.Object;\n  options.full_width = this.fullWidth;\n  options.indicators = this.indicators;\n  options.transition = this.duration_0;\n  options.interval = this.interval;\n  $wnd.$(($clinit_DOM() , this.element_0)).slider(options);\n}\n;\n_.setHeight_0 = function setHeight_2(height){\n  $setHeight_2(this, height);\n}\n;\nfunction MediaPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(876, 57, $intern_53, MediaPresenter);\n_.onReveal = function onReveal_54(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Media', 'Media components include things that have to do with large media objects like Images, Video, Audio, etc.', 'components/media/MediaView', 'https://material.io/guidelines/style/imagery.html'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_media_MediaPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaPresenter', 876);\nfunction $fullscreenBtnClick(this$static){\n  $setFullscreen_2(this$static, $equals_2($getElement(this$static.fullscreenBtn.span_1.textMixin.uiObject).textContent, 'Fullscreen Slider'));\n}\n\nfunction $setFullscreen_2(this$static, fullscreen){\n  $setFullscreen_1(this$static.slider_0, fullscreen);\n  if (fullscreen) {\n    $getElement(this$static.slider_0).style['position'] = ($clinit_Style$Position() , 'fixed');\n    $getElement(this$static.slider_0).style['zIndex'] = '9998';\n    $setHeight_2(this$static.slider_0, '100%');\n    $getElement(this$static.fullscreenBtn).style['position'] = 'fixed';\n    $getElement(this$static.fullscreenBtn).style['zIndex'] = '9999';\n    $getElement(this$static.fullscreenBtn).style['bottom'] = ($clinit_Style$Unit() , '0.0px');\n    $getElement(this$static.fullscreenBtn).style['left'] = '0.0px';\n    $setIconType_1(this$static.fullscreenBtn, ($clinit_IconType() , FULLSCREEN_EXIT));\n    $setText_4(this$static.fullscreenBtn, 'Close Fullscreen');\n  }\n   else {\n    $getElement(this$static.slider_0).style['position'] = '';\n    $getElement(this$static.slider_0).style['zIndex'] = '';\n    $getElement(this$static.slider_0).style['height'] = '';\n    $getElement(this$static.fullscreenBtn).style['position'] = '';\n    $getElement(this$static.fullscreenBtn).style['zIndex'] = '';\n    $getElement(this$static.fullscreenBtn).style['bottom'] = '';\n    $getElement(this$static.fullscreenBtn).style['left'] = '';\n    $setIconType_1(this$static.fullscreenBtn, ($clinit_IconType() , FULLSCREEN_0));\n    $setText_4(this$static.fullscreenBtn, 'Fullscreen Slider');\n  }\n}\n\nfunction MediaView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_28(new MediaView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(1248, 60, $intern_54, MediaView);\nvar Lgwt_material_design_demo_client_application_components_media_MediaView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaView', 1248);\nfunction $build_f_HTMLPanel1_28(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow6, f_MaterialRow10, f_MaterialRow14, f_MaterialRow33, f_MaterialRow54, f_MaterialTitle3, f_MaterialImage4, f_PrettyPre5, sb, f_MaterialTitle7, f_MaterialImage8, f_PrettyPre9, sb_0, f_MaterialTitle11, f_MaterialVideo12, f_PrettyPre13, sb_1, f_MaterialTitle15, slider, f_MaterialSlideItem16, f_MaterialImage17, f_MaterialSlideCaption18, f_MaterialTitle19, f_MaterialSlideItem20, f_MaterialImage21, f_MaterialSlideCaption22, f_MaterialTitle23, f_MaterialSlideItem24, f_MaterialImage25, f_MaterialSlideCaption26, f_MaterialTitle27, f_MaterialSlideItem28, f_MaterialImage29, f_MaterialSlideCaption30, f_MaterialTitle31, f_PrettyPre32, sb_2, f_MaterialBadge34, f_MaterialTitle35, f_MaterialSlider36, f_MaterialSlideItem37, f_MaterialImage38, f_MaterialSlideCaption39, f_MaterialTitle40, f_MaterialSlideItem41, f_MaterialImage42, f_MaterialSlideCaption43, f_MaterialTitle44, f_MaterialSlideItem45, f_MaterialImage46, f_MaterialSlideCaption47, f_MaterialTitle48, f_MaterialSlideItem49, f_MaterialImage50, f_MaterialSlideCaption51, f_MaterialTitle52, f_PrettyPre53, sb_3, f_MaterialTitle55, fullscreenBtn, f_PrettyPre56, sb_4;\n  f_HTMLPanel1 = new HTMLPanel($html7_3(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_12(f_MaterialTitle3.paragraph, 'Material box is a material design implementation of the Lightbox plugin. When a user clicks on an image that can be enlarged. Material box centers the image and enlarges it in a smooth, non-jarring manner. To dismiss the image, the user can either click on the image again, scroll away, or press the ESC key.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Material Box'))).html_0)) , fire_5(f_MaterialTitle3, 'Material Box') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (f_MaterialImage4 = new MaterialImage , $setType_1(f_MaterialImage4, ($clinit_ImageType() , MATERIALBOXED)) , $setValue_10(f_MaterialImage4, 'https://assets.materialup.com/uploads/0587e4a8-6a46-4e27-b8bf-836e4350fe82/candycons.gif', true) , f_MaterialImage4)) , $add_9(f_MaterialRow2, (f_PrettyPre5 = new PrettyPre , $setHTML_0(f_PrettyPre5, (sb = new StringBuilder , sb.string += '&lt;m:MaterialImage url=\"https://assets.materialup.com/uploads/0587e4a8-6a46-4e27-b8bf-836e4350fe82/candycons.gif\" type=\"MATERIALBOXED\"/&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre5.element_0, 'lang-xml', true) , f_PrettyPre5)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow6 = new MaterialRow , $add_9(f_MaterialRow6, (f_MaterialTitle7 = new MaterialTitle , $setText_12(f_MaterialTitle7.paragraph, 'It is very easy to add a short caption to your photo. Just add the caption as a caption attribute.') , $setInnerHTML($getElement(f_MaterialTitle7.header), (new SafeHtmlString(htmlEscape('Captions'))).html_0) , fire_5(f_MaterialTitle7, 'Captions') , f_MaterialTitle7)) , $add_9(f_MaterialRow6, (f_MaterialImage8 = new MaterialImage , f_MaterialImage8.element_0.setAttribute('data-caption', 'I love Material Design') , $setType_1(f_MaterialImage8, MATERIALBOXED) , $setValue_10(f_MaterialImage8, 'https://assets.materialup.com/uploads/449089f1-22d5-473f-9de6-59ef04e9de2b/personal-card-material-design-animation.gif', true) , f_MaterialImage8)) , $add_9(f_MaterialRow6, (f_PrettyPre9 = new PrettyPre , $setHTML_0(f_PrettyPre9, (sb_0 = new StringBuilder , sb_0.string += '&lt;m:MaterialImage url=\"https://assets.materialup.com/uploads/449089f1-22d5-473f-9de6-59ef04e9de2b/personal-card-material-design-animation.gif\" type=\"MATERIALBOXED\" caption=\"I love Material Design\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre9.element_0, 'lang-xml', true) , f_PrettyPre9)) , setStyleName(f_MaterialRow6.element_0, 'code', true) , f_MaterialRow6), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow10 = new MaterialRow , $add_9(f_MaterialRow10, (f_MaterialTitle11 = new MaterialTitle , $setText_12(f_MaterialTitle11.paragraph, 'We provide a container for Embedded Videos that resizes them responsively.') , $setInnerHTML($getElement(f_MaterialTitle11.header), (new SafeHtmlString(htmlEscape('Responsive Videos'))).html_0) , fire_5(f_MaterialTitle11, 'Responsive Videos') , f_MaterialTitle11)) , $add_9(f_MaterialRow10, (f_MaterialVideo12 = new MaterialVideo , $setUrl(f_MaterialVideo12.frame_0, 'https://www.youtube.com/embed/Q8TXgCzxEnw?rel=0') , fire_5(f_MaterialVideo12, 'https://www.youtube.com/embed/Q8TXgCzxEnw?rel=0') , f_MaterialVideo12)) , $add_9(f_MaterialRow10, (f_PrettyPre13 = new PrettyPre , $setHTML_0(f_PrettyPre13, (sb_1 = new StringBuilder , sb_1.string += '&lt;m:MaterialVideo url=\"https://www.youtube.com/embed/Q8TXgCzxEnw?rel=0\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre13.element_0, 'lang-xml', true) , f_PrettyPre13)) , setStyleName(f_MaterialRow10.element_0, 'code', true) , f_MaterialRow10), $get_0(this$static.domId2Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow14 = new MaterialRow , $add_9(f_MaterialRow14, (f_MaterialTitle15 = new MaterialTitle , $setText_12(f_MaterialTitle15.paragraph, 'Our slider is a simple and elegant image carousel. You can also have captions that will be transitioned on their own depending on their alignment. You can also have indicators that show up on the bottom of the slider. Note: This is also Hammer.js compatible! Try swiping with your finger to scroll through the slider.') , $setInnerHTML($getElement(f_MaterialTitle15.header), (new SafeHtmlString(htmlEscape('Material Slider'))).html_0) , fire_5(f_MaterialTitle15, 'Material Slider') , f_MaterialTitle15)) , $add_9(f_MaterialRow14, (slider = new MaterialSlider , $add_34(slider, (f_MaterialSlideItem16 = new MaterialSlideItem , $add_9(f_MaterialSlideItem16, (f_MaterialImage17 = new MaterialImage , $setValue_10(f_MaterialImage17, 'https://i.imgur.com/BHj2Jfj.jpg', true) , f_MaterialImage17)) , $add_9(f_MaterialSlideItem16, (f_MaterialSlideCaption18 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption18, (f_MaterialTitle19 = new MaterialTitle , $setText_12(f_MaterialTitle19.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle19.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle19, 'This is our big Tagline') , f_MaterialTitle19)) , $setTextAlign(f_MaterialSlideCaption18, ($clinit_TextAlign() , CENTER_4)) , f_MaterialSlideCaption18)) , f_MaterialSlideItem16)) , $add_34(slider, (f_MaterialSlideItem20 = new MaterialSlideItem , $add_9(f_MaterialSlideItem20, (f_MaterialImage21 = new MaterialImage , $setValue_10(f_MaterialImage21, 'https://i.imgur.com/YQqcICi.jpg', true) , f_MaterialImage21)) , $add_9(f_MaterialSlideItem20, (f_MaterialSlideCaption22 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption22, (f_MaterialTitle23 = new MaterialTitle , $setText_12(f_MaterialTitle23.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle23.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle23, 'This is our big Tagline') , f_MaterialTitle23)) , $setTextAlign(f_MaterialSlideCaption22, LEFT_8) , f_MaterialSlideCaption22)) , f_MaterialSlideItem20)) , $add_34(slider, (f_MaterialSlideItem24 = new MaterialSlideItem , $add_9(f_MaterialSlideItem24, (f_MaterialImage25 = new MaterialImage , $setValue_10(f_MaterialImage25, 'https://i.imgur.com/Kkz8RYM.jpg', true) , f_MaterialImage25)) , $add_9(f_MaterialSlideItem24, (f_MaterialSlideCaption26 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption26, (f_MaterialTitle27 = new MaterialTitle , $setText_12(f_MaterialTitle27.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle27.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle27, 'This is our big Tagline') , f_MaterialTitle27)) , $setTextAlign(f_MaterialSlideCaption26, RIGHT_9) , f_MaterialSlideCaption26)) , f_MaterialSlideItem24)) , $add_34(slider, (f_MaterialSlideItem28 = new MaterialSlideItem , $add_9(f_MaterialSlideItem28, (f_MaterialImage29 = new MaterialImage , $setValue_10(f_MaterialImage29, 'https://i.imgur.com/1iGriGD.jpg', true) , f_MaterialImage29)) , $add_9(f_MaterialSlideItem28, (f_MaterialSlideCaption30 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption30, (f_MaterialTitle31 = new MaterialTitle , $setText_12(f_MaterialTitle31.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle31.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle31, 'This is our big Tagline') , f_MaterialTitle31)) , $setTextAlign(f_MaterialSlideCaption30, CENTER_4) , f_MaterialSlideCaption30)) , f_MaterialSlideItem28)) , $setFullscreen(slider.fullscreenMixin, false) , this$static.owner.slider_0 = slider , slider)) , $add_9(f_MaterialRow14, (f_PrettyPre32 = new PrettyPre , $setHTML_0(f_PrettyPre32, (sb_2 = new StringBuilder , sb_2.string += '&lt;m:MaterialSlider ui:field=\"slider\" fullscreen=\"false\"&gt;<br><br> \\u2003&lt;m:MaterialSlideItem&gt;<br> \\u2003\\u2003&lt;m:MaterialImage url=\"https://i.imgur.com/BHj2Jfj.jpg\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialSlideCaption textAlign=\"CENTER\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialTitle title=\"This is our big Tagline\" description=\"Here\\'s our small slogan.\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialSlideCaption&gt;<br> \\u2003&lt;/m:MaterialSlideItem&gt;<br> \\u2003&lt;--Other Items here --&gt;<br><br> &lt;/m:MaterialSlider&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre32.element_0, 'lang-xml', true) , f_PrettyPre32)) , setStyleName(f_MaterialRow14.element_0, 'code', true) , f_MaterialRow14), $get_0(this$static.domId3Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow33 = new MaterialRow , $add_9(f_MaterialRow33, (f_MaterialBadge34 = new MaterialBadge , $setBackgroundColor(f_MaterialBadge34, ($clinit_Color() , AMBER_LIGHTEN_5)) , $setShadow_0((!f_MaterialBadge34.shadowMixin && (f_MaterialBadge34.shadowMixin = new ShadowMixin(f_MaterialBadge34)) , f_MaterialBadge34.shadowMixin), 1) , $setLayoutPosition(f_MaterialBadge34, ($clinit_Style$Position() , RELATIVE)) , $setInnerHTML(f_MaterialBadge34.element_0, (new SafeHtmlString(htmlEscape('FEATURE UPDATE'))).html_0) , $setFloat(f_MaterialBadge34, ($clinit_Style$Float() , RIGHT)) , $setTextColor(f_MaterialBadge34, AMBER) , f_MaterialBadge34)) , $add_9(f_MaterialRow33, (f_MaterialTitle35 = new MaterialTitle , $setText_12(f_MaterialTitle35.paragraph, 'You can set the duration / interval in milliseconds of Material Slider easily.') , $setInnerHTML($getElement(f_MaterialTitle35.header), (new SafeHtmlString(htmlEscape('Material Slider : Options'))).html_0) , fire_5(f_MaterialTitle35, 'Material Slider : Options') , f_MaterialTitle35)) , $add_9(f_MaterialRow33, (f_MaterialSlider36 = new MaterialSlider , $add_34(f_MaterialSlider36, (f_MaterialSlideItem37 = new MaterialSlideItem , $add_9(f_MaterialSlideItem37, (f_MaterialImage38 = new MaterialImage , $setValue_10(f_MaterialImage38, 'http://mayastepien.nl/googlecalendar/google-drinks.jpg', true) , f_MaterialImage38)) , $add_9(f_MaterialSlideItem37, (f_MaterialSlideCaption39 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption39, (f_MaterialTitle40 = new MaterialTitle , $setText_12(f_MaterialTitle40.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle40.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle40, 'This is our big Tagline') , f_MaterialTitle40)) , $setTextAlign(f_MaterialSlideCaption39, CENTER_4) , f_MaterialSlideCaption39)) , f_MaterialSlideItem37)) , $add_34(f_MaterialSlider36, (f_MaterialSlideItem41 = new MaterialSlideItem , $add_9(f_MaterialSlideItem41, (f_MaterialImage42 = new MaterialImage , $setValue_10(f_MaterialImage42, 'http://mayastepien.nl/googlecalendar/google-coffee.jpg', true) , f_MaterialImage42)) , $add_9(f_MaterialSlideItem41, (f_MaterialSlideCaption43 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption43, (f_MaterialTitle44 = new MaterialTitle , $setText_12(f_MaterialTitle44.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle44.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle44, 'This is our big Tagline') , f_MaterialTitle44)) , $setTextAlign(f_MaterialSlideCaption43, LEFT_8) , f_MaterialSlideCaption43)) , f_MaterialSlideItem41)) , $add_34(f_MaterialSlider36, (f_MaterialSlideItem45 = new MaterialSlideItem , $add_9(f_MaterialSlideItem45, (f_MaterialImage46 = new MaterialImage , $setValue_10(f_MaterialImage46, 'http://mayastepien.nl/googlecalendar/google-skiing.jpg', true) , f_MaterialImage46)) , $add_9(f_MaterialSlideItem45, (f_MaterialSlideCaption47 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption47, (f_MaterialTitle48 = new MaterialTitle , $setText_12(f_MaterialTitle48.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle48.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle48, 'This is our big Tagline') , f_MaterialTitle48)) , $setTextAlign(f_MaterialSlideCaption47, RIGHT_9) , f_MaterialSlideCaption47)) , f_MaterialSlideItem45)) , $add_34(f_MaterialSlider36, (f_MaterialSlideItem49 = new MaterialSlideItem , $add_9(f_MaterialSlideItem49, (f_MaterialImage50 = new MaterialImage , $setValue_10(f_MaterialImage50, 'http://mayastepien.nl/googlecalendar/google-manicure.jpg', true) , f_MaterialImage50)) , $add_9(f_MaterialSlideItem49, (f_MaterialSlideCaption51 = new MaterialSlideCaption , $add_9(f_MaterialSlideCaption51, (f_MaterialTitle52 = new MaterialTitle , $setText_12(f_MaterialTitle52.paragraph, \"Here's our small slogan.\") , $setInnerHTML($getElement(f_MaterialTitle52.header), (new SafeHtmlString(htmlEscape('This is our big Tagline'))).html_0) , fire_5(f_MaterialTitle52, 'This is our big Tagline') , f_MaterialTitle52)) , $setTextAlign(f_MaterialSlideCaption51, CENTER_4) , f_MaterialSlideCaption51)) , f_MaterialSlideItem49)) , f_MaterialSlider36.duration_0 = 300 , f_MaterialSlider36.interval = $intern_2 , f_MaterialSlider36)) , $add_9(f_MaterialRow33, (f_PrettyPre53 = new PrettyPre , $setHTML_0(f_PrettyPre53, (sb_3 = new StringBuilder , sb_3.string += '&lt;m:MaterialSlider ui:field=\"slider\" duration=\"300\" interval=\"1000\"&gt;<br><br> \\u2003&lt;m:MaterialSlideItem&gt;<br> \\u2003\\u2003&lt;m:MaterialImage url=\"http://mayastepien.nl/googlecalendar/google-drinks.jpg\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialSlideCaption textAlign=\"CENTER\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialTitle title=\"This is our big Tagline\" description=\"Here\\'s our small slogan.\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialSlideCaption&gt;<br> \\u2003&lt;/m:MaterialSlideItem&gt;<br> \\u2003&lt;--Other Items here --&gt;<br><br> &lt;/m:MaterialSlider&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre53.element_0, 'lang-xml', true) , f_PrettyPre53)) , setStyleName(f_MaterialRow33.element_0, 'code', true) , f_MaterialRow33), $get_0(this$static.domId4Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow54 = new MaterialRow , $add_9(f_MaterialRow54, (f_MaterialTitle55 = new MaterialTitle , $setText_12(f_MaterialTitle55.paragraph, \"Just add fullscreen='true' on MaterialSlide to make the slider fullscreen\") , $setInnerHTML($getElement(f_MaterialTitle55.header), (new SafeHtmlString(htmlEscape('Material Slider Fullscreen'))).html_0) , fire_5(f_MaterialTitle55, 'Material Slider Fullscreen') , f_MaterialTitle55)) , $add_9(f_MaterialRow54, (fullscreenBtn = new MaterialButton , $setWaves(fullscreenBtn, ($clinit_WavesType() , LIGHT)) , $setIconType_1(fullscreenBtn, ($clinit_IconType() , FULLSCREEN_0)) , $setText_8(fullscreenBtn.span_1, 'Fullscreen Slider') , fullscreenBtn.span_1.attached || $add_9(fullscreenBtn, fullscreenBtn.span_1) , $addClickHandler(fullscreenBtn, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , this$static.owner.fullscreenBtn = fullscreenBtn , fullscreenBtn)) , $add_9(f_MaterialRow54, (f_PrettyPre56 = new PrettyPre , $setHTML_0(f_PrettyPre56, (sb_4 = new StringBuilder , sb_4.string += '&lt;m:MaterialSlider ui:field=\"slider\" fullscreen=\"true\"&gt;<br><br> \\u2003&lt;m:MaterialSlideItem&gt;<br> \\u2003\\u2003&lt;m:MaterialImage url=\"https://i.imgur.com/BHj2Jfj.jpg\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialSlideCaption textAlign=\"CENTER\"&gt;<br> \\u2003\\u2003\\u2003&lt;m:MaterialTitle title=\"This is our big Tagline\" description=\"Here\\'s our small slogan.\"/&gt;<br> \\u2003\\u2003&lt;/m:MaterialSlideCaption&gt;<br> \\u2003&lt;/m:MaterialSlideItem&gt;<br> \\u2003&lt;--Other Items here --&gt;<br><br> &lt;/m:MaterialSlider&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre56.element_0, 'lang-xml', true) , f_PrettyPre56)) , setStyleName(f_MaterialRow54.element_0, 'code', true) , f_MaterialRow54), $get_0(this$static.domId5Element));\n  return f_HTMLPanel1;\n}\n\nfunction MediaView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new MediaView_BinderImpl$Widgets$1(this);\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n}\n\ndefineClass(1676, 1, {}, MediaView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_media_MediaView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaView_BinderImpl/Widgets', 1676);\nfunction MediaView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1677, 1, $intern_63, MediaView_BinderImpl$Widgets$1);\n_.onClick_0 = function onClick_254(event_0){\n  $fullscreenBtnClick(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_media_MediaView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.media', 'MediaView_BinderImpl/Widgets/1', 1677);\nfunction $html7_3(arg0, arg1, arg2, arg3, arg4, arg5){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_1(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_1(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$) {\n    result0 = new MediaPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$) {\n    result = new MediaView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$media$MediaView$_annotation$$none$$;\n}\n\ndefineClass(773, 1, $intern_108);\n_.onSuccess_0 = function onSuccess_34(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$media$MediaPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(33);\n\n//# sourceURL=gwtmaterialdemo-33.js\n")
