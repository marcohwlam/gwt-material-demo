$wnd.gwtmaterialdemo.runAsyncCallback23("function ChipsPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(876, 57, $intern_54, ChipsPresenter);\n_.onReveal = function onReveal_44(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Chips', \"Chips represent complex entities in small blocks, such as a contact. They can contain a photo, short title string, and brief information. Chips are manipulated through drag-and-drop. Touching them invokes the full view in a card or full screen view or invokes a menu of options related to that chip's entity.\", 'components/chips/ChipsView', 'https://material.io/guidelines/components/chips.html'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsPresenter', 876);\nfunction ChipsView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_22(new ChipsView_BinderImpl$Widgets(this)));\n  $addHandler_0(this.chip, new ChipsView$lambda$0$Type, TYPE_14?TYPE_14:(TYPE_14 = new GwtEvent$Type));\n}\n\ndefineClass(1232, 60, $intern_55, ChipsView);\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView', 1232);\nfunction ChipsView$lambda$0$Type(){\n}\n\ndefineClass(1233, 1, $intern_48, ChipsView$lambda$0$Type);\n_.onClose_0 = function onClose_9(arg0){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Event: Closed', $intern_67, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView/lambda$0$Type', 1233);\nfunction $build_f_HTMLPanel1_22(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow11, f_MaterialRow19, f_MaterialRow26, f_MaterialRow33, f_MaterialTitle3, f_MaterialRow4, f_MaterialChip5, f_MaterialChip6, f_MaterialChip7, f_MaterialChip8, f_MaterialChip9, f_PrettyPre10, sb, f_MaterialTitle12, f_MaterialRow13, f_MaterialChip14, f_MaterialChip15, f_MaterialChip16, f_MaterialChip17, f_PrettyPre18, sb_0, f_MaterialTitle20, f_MaterialRow21, f_MaterialChip22, f_MaterialChip23, f_MaterialChip24, f_PrettyPre25, sb_1, f_MaterialTitle27, f_MaterialRow28, f_MaterialChip29, f_MaterialChip30, f_MaterialChip31, f_PrettyPre32, sb_2, f_MaterialTitle34, closeChip, f_PrettyPre35, sb_3, f_MaterialRow36, chip, chipClick, f_PrettyPre37, sb_4, f_PrettyPre38, sb_5;\n  f_HTMLPanel1 = new HTMLPanel($html8(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_12(f_MaterialTitle3.paragraph, 'If you want just text only chip, you can use this for autocomplete textbox and search capability') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Simple Chip'))).html_0)) , fire_5(f_MaterialTitle3, 'Simple Chip') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (f_MaterialRow4 = new MaterialRow , $add_9(f_MaterialRow4, (f_MaterialChip5 = new MaterialChip , f_MaterialChip5.element_0.style['margin'] = ($clinit_Style$Unit() , '8.0px') , $setIconType_3(f_MaterialChip5, ($clinit_IconType() , CLOSE)) , $setTooltip((!f_MaterialChip5.tooltipMixin && (f_MaterialChip5.tooltipMixin = new TooltipMixin(f_MaterialChip5)) , f_MaterialChip5.tooltipMixin), 'Sample') , $setTooltipPosition(f_MaterialChip5, ($clinit_Position() , BOTTOM_2)) , $setText_8(f_MaterialChip5.chipLabel, 'Default') , fire_5(f_MaterialChip5, 'Default') , f_MaterialChip5)) , $add_9(f_MaterialRow4, (f_MaterialChip6 = new MaterialChip , f_MaterialChip6.element_0.style['margin'] = '8.0px' , $setBackgroundColor(f_MaterialChip6, ($clinit_Color() , RED)) , $setIconType_3(f_MaterialChip6, CLOSE) , $setText_8(f_MaterialChip6.chipLabel, 'Apple') , fire_5(f_MaterialChip6, 'Apple') , $setTextColor(f_MaterialChip6, WHITE) , f_MaterialChip6)) , $add_9(f_MaterialRow4, (f_MaterialChip7 = new MaterialChip , f_MaterialChip7.element_0.style['margin'] = '8.0px' , $setBackgroundColor(f_MaterialChip7, ORANGE) , $setIconType_3(f_MaterialChip7, CLOSE) , $setText_8(f_MaterialChip7.chipLabel, 'ORANGE') , fire_5(f_MaterialChip7, 'ORANGE') , $setTextColor(f_MaterialChip7, WHITE) , f_MaterialChip7)) , $add_9(f_MaterialRow4, (f_MaterialChip8 = new MaterialChip , f_MaterialChip8.element_0.style['margin'] = '8.0px' , $setBackgroundColor(f_MaterialChip8, AMBER) , $setIconType_3(f_MaterialChip8, CLOSE) , $setText_8(f_MaterialChip8.chipLabel, 'Banana') , fire_5(f_MaterialChip8, 'Banana') , $setTextColor(f_MaterialChip8, WHITE) , f_MaterialChip8)) , $add_9(f_MaterialRow4, (f_MaterialChip9 = new MaterialChip , f_MaterialChip9.element_0.style['margin'] = '8.0px' , $setBackgroundColor(f_MaterialChip9, GREEN) , $setIconType_3(f_MaterialChip9, CLOSE) , $setText_8(f_MaterialChip9.chipLabel, 'Mango') , fire_5(f_MaterialChip9, 'Mango') , $setTextColor(f_MaterialChip9, WHITE) , f_MaterialChip9)) , f_MaterialRow4)) , $add_9(f_MaterialRow2, (f_PrettyPre10 = new PrettyPre , $setHTML_0(f_PrettyPre10, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialChip margin=\"8\" text=\"Default\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip margin=\"8\" text=\"Apple\" backgroundColor=\"RED\" textColor=\"WHITE\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip margin=\"8\" text=\"ORANGE\" backgroundColor=\"ORANGE\" textColor=\"WHITE\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip margin=\"8\" text=\"Banana\" backgroundColor=\"AMBER\" textColor=\"WHITE\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip margin=\"8\" text=\"Mango\" backgroundColor=\"GREEN\" textColor=\"WHITE\" iconType=\"CLOSE\"/&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre10.element_0, 'lang-xml', true) , f_PrettyPre10)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow11 = new MaterialRow , $add_9(f_MaterialRow11, (f_MaterialTitle12 = new MaterialTitle , $setText_12(f_MaterialTitle12.paragraph, 'You can specify a letter as an avatar from Aa to Zz.') , $setInnerHTML($getElement(f_MaterialTitle12.header), (new SafeHtmlString(htmlEscape('Letter Chip'))).html_0) , fire_5(f_MaterialTitle12, 'Letter Chip') , f_MaterialTitle12)) , $add_9(f_MaterialRow11, (f_MaterialRow13 = new MaterialRow , $add_9(f_MaterialRow13, (f_MaterialChip14 = new MaterialChip , f_MaterialChip14.element_0.style['margin'] = '8.0px' , $setLetter(f_MaterialChip14.letterMixin, 'A') , $setIconType_3(f_MaterialChip14, CLOSE) , $setText_8(f_MaterialChip14.chipLabel, 'Apple') , fire_5(f_MaterialChip14, 'Apple') , $setLetterColor_0(f_MaterialChip14, WHITE) , $setLetterBackgroundColor_0(f_MaterialChip14, RED) , f_MaterialChip14)) , $add_9(f_MaterialRow13, (f_MaterialChip15 = new MaterialChip , f_MaterialChip15.element_0.style['margin'] = '8.0px' , $setLetter(f_MaterialChip15.letterMixin, 'G') , $setIconType_3(f_MaterialChip15, CLOSE) , $setText_8(f_MaterialChip15.chipLabel, 'Grapes') , fire_5(f_MaterialChip15, 'Grapes') , $setLetterColor_0(f_MaterialChip15, PINK_ACCENT_1) , $setLetterBackgroundColor_0(f_MaterialChip15, PURPLE) , f_MaterialChip15)) , $add_9(f_MaterialRow13, (f_MaterialChip16 = new MaterialChip , f_MaterialChip16.element_0.style['margin'] = '8.0px' , $setLetter(f_MaterialChip16.letterMixin, 'D') , $setIconType_3(f_MaterialChip16, CLOSE) , $setText_8(f_MaterialChip16.chipLabel, 'Dalandan') , fire_5(f_MaterialChip16, 'Dalandan') , $setLetterColor_0(f_MaterialChip16, WHITE) , $setLetterBackgroundColor_0(f_MaterialChip16, GREEN) , f_MaterialChip16)) , $add_9(f_MaterialRow13, (f_MaterialChip17 = new MaterialChip , f_MaterialChip17.element_0.style['margin'] = '8.0px' , $setLetter(f_MaterialChip17.letterMixin, 'M') , $setIconType_3(f_MaterialChip17, CLOSE) , $setText_8(f_MaterialChip17.chipLabel, 'Mango') , fire_5(f_MaterialChip17, 'Mango') , $setLetterColor_0(f_MaterialChip17, ORANGE) , $setLetterBackgroundColor_0(f_MaterialChip17, YELLOW) , f_MaterialChip17)) , f_MaterialRow13)) , $add_9(f_MaterialRow11, (f_PrettyPre18 = new PrettyPre , $setHTML_0(f_PrettyPre18, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m:MaterialChip margin=\"8\" letter=\"A\" letterColor=\"WHITE\" letterBackgroundColor=\"RED\" text=\"Apple\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip margin=\"8\" letter=\"G\" letterColor=\"PINK_ACCENT_1\" letterBackgroundColor=\"PURPLE\" text=\"Grapes\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip margin=\"8\" letter=\"D\" letterColor=\"WHITE\" letterBackgroundColor=\"GREEN\" text=\"Dalandan\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip margin=\"8\" letter=\"M\" letterColor=\"ORANGE\" letterBackgroundColor=\"YELLOW\" text=\"Mango\" iconType=\"CLOSE\"/&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre18.element_0, 'lang-xml', true) , f_PrettyPre18)) , setStyleName(f_MaterialRow11.element_0, 'code', true) , f_MaterialRow11), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow19 = new MaterialRow , $add_9(f_MaterialRow19, (f_MaterialTitle20 = new MaterialTitle , $setText_12(f_MaterialTitle20.paragraph, 'Static chips cannot be selected, removed or edited, and are not part of any model.') , $setInnerHTML($getElement(f_MaterialTitle20.header), (new SafeHtmlString(htmlEscape('Static Chip'))).html_0) , fire_5(f_MaterialTitle20, 'Static Chip') , f_MaterialTitle20)) , $add_9(f_MaterialRow19, (f_MaterialRow21 = new MaterialRow , $add_9(f_MaterialRow21, (f_MaterialChip22 = new MaterialChip , f_MaterialChip22.element_0.style['margin'] = '8.0px' , $setText_8(f_MaterialChip22.chipLabel, 'Apple') , fire_5(f_MaterialChip22, 'Apple') , f_MaterialChip22)) , $add_9(f_MaterialRow21, (f_MaterialChip23 = new MaterialChip , f_MaterialChip23.element_0.style['margin'] = '8.0px' , $setText_8(f_MaterialChip23.chipLabel, 'Banana') , fire_5(f_MaterialChip23, 'Banana') , f_MaterialChip23)) , $add_9(f_MaterialRow21, (f_MaterialChip24 = new MaterialChip , f_MaterialChip24.element_0.style['margin'] = '8.0px' , $setText_8(f_MaterialChip24.chipLabel, 'Mango') , fire_5(f_MaterialChip24, 'Mango') , f_MaterialChip24)) , f_MaterialRow21)) , $add_9(f_MaterialRow19, (f_PrettyPre25 = new PrettyPre , $setHTML_0(f_PrettyPre25, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialChip margin=\"8\" text=\"Apple\" /&gt;<br> &lt;m:MaterialChip margin=\"8\" text=\"Banana\" /&gt;<br> &lt;m:MaterialChip margin=\"8\" text=\"Mango\" /&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre25.element_0, 'lang-xml', true) , f_PrettyPre25)) , setStyleName(f_MaterialRow19.element_0, 'code', true) , f_MaterialRow19), $get_0(this$static.domId2Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow26 = new MaterialRow , $add_9(f_MaterialRow26, (f_MaterialTitle27 = new MaterialTitle , $setText_12(f_MaterialTitle27.paragraph, \"Contact chips represent contact information that users have for people in a compact way. They are invoked and inserted into a text field (usually the To field) when the user starts typing a contact's name, sees the contact's addresses, and selects the correct one. Contact chips can be added directly to a text field from a menu of contacts. Contact chips efficiently confirm that the user will be sending their message to the correct person.\") , $setInnerHTML($getElement(f_MaterialTitle27.header), (new SafeHtmlString(htmlEscape('Contact Chips'))).html_0) , fire_5(f_MaterialTitle27, 'Contact Chips') , f_MaterialTitle27)) , $add_9(f_MaterialRow26, (f_MaterialRow28 = new MaterialRow , $add_9(f_MaterialRow28, (f_MaterialChip29 = new MaterialChip , f_MaterialChip29.element_0.style['margin'] = '8.0px' , $setIconType_3(f_MaterialChip29, CLOSE) , $setText_8(f_MaterialChip29.chipLabel, \"Yunalis Mat Zara'ai\") , fire_5(f_MaterialChip29, \"Yunalis Mat Zara'ai\") , $setUrl_1(f_MaterialChip29.image, 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi9lfCkLutb7ugJlIjn84qWNoiICopC-Vyx7QQJRHF5E7GlqFG') , $add_9(f_MaterialChip29, f_MaterialChip29.image) , f_MaterialChip29)) , $add_9(f_MaterialRow28, (f_MaterialChip30 = new MaterialChip , f_MaterialChip30.element_0.style['margin'] = '8.0px' , $setIconType_3(f_MaterialChip30, CLOSE) , $setText_8(f_MaterialChip30.chipLabel, 'Marjorie Matias') , fire_5(f_MaterialChip30, 'Marjorie Matias') , $setUrl_1(f_MaterialChip30.image, 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi9lfCkLutb7ugJlIjn84qWNoiICopC-Vyx7QQJRHF5E7GlqFG') , $add_9(f_MaterialChip30, f_MaterialChip30.image) , f_MaterialChip30)) , $add_9(f_MaterialRow28, (f_MaterialChip31 = new MaterialChip , f_MaterialChip31.element_0.style['margin'] = '8.0px' , $setIconType_3(f_MaterialChip31, CLOSE) , $setText_8(f_MaterialChip31.chipLabel, 'Zenaida Ringor') , fire_5(f_MaterialChip31, 'Zenaida Ringor') , $setUrl_1(f_MaterialChip31.image, 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi9lfCkLutb7ugJlIjn84qWNoiICopC-Vyx7QQJRHF5E7GlqFG') , $add_9(f_MaterialChip31, f_MaterialChip31.image) , f_MaterialChip31)) , f_MaterialRow28)) , $add_9(f_MaterialRow26, (f_PrettyPre32 = new PrettyPre , $setHTML_0(f_PrettyPre32, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialChip url=\"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi9lfCkLutb7ugJlIjn84qWNoiICopC-Vyx7QQJRHF5E7GlqFG\" text=\"Yunalis Mat Zara\\'ai\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip margin=\"8\" url=\"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi9lfCkLutb7ugJlIjn84qWNoiICopC-Vyx7QQJRHF5E7GlqFG\" text=\"Marjorie Matias\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip margin=\"8\" url=\"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi9lfCkLutb7ugJlIjn84qWNoiICopC-Vyx7QQJRHF5E7GlqFG\" text=\"Zenaida Ringor\" iconType=\"CLOSE\"/&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre32.element_0, 'lang-xml', true) , f_PrettyPre32)) , setStyleName(f_MaterialRow26.element_0, 'code', true) , f_MaterialRow26), $get_0(this$static.domId3Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow33 = new MaterialRow , $add_9(f_MaterialRow33, (f_MaterialTitle34 = new MaterialTitle , $setText_12(f_MaterialTitle34.paragraph, 'Adding events on chip is easy, you can get the secondary icon by calling getIcon() then addClickHandles etc.') , $setInnerHTML($getElement(f_MaterialTitle34.header), (new SafeHtmlString(htmlEscape('Events'))).html_0) , fire_5(f_MaterialTitle34, 'Events') , f_MaterialTitle34)) , $add_9(f_MaterialRow33, (closeChip = new MaterialButton , $setText_8(closeChip.span_1, 'Close Chip') , closeChip.span_1.attached || $add_9(closeChip, closeChip.span_1) , $addClickHandler(closeChip, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , closeChip)) , $add_9(f_MaterialRow33, (f_PrettyPre35 = new PrettyPre , $setHTML_0(f_PrettyPre35, (sb_3 = new StringBuilder , sb_3.string += '// Close the chip <br> chip.close();' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre35.element_0, 'lang-java', true) , f_PrettyPre35)) , $add_9(f_MaterialRow33, (f_MaterialRow36 = new MaterialRow , $add_9(f_MaterialRow36, (chip = new MaterialChip , chip.element_0.style['margin'] = '8.0px' , $setIconType_3(chip, CLOSE) , $setText_8(chip.chipLabel, \"Yunalis Mat Zara'ai\") , fire_5(chip, \"Yunalis Mat Zara'ai\") , $setUrl_1(chip.image, 'http://b.vimeocdn.com/ps/339/488/3394886_300.jpg') , $add_9(chip, chip.image) , this$static.owner.chip = chip , chip)) , $add_9(f_MaterialRow36, (chipClick = new MaterialChip , chipClick.element_0.style['margin'] = '8.0px' , $setText_8(chipClick.chipLabel, 'Click Me') , fire_5(chipClick, 'Click Me') , $addClickHandler(chipClick, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , chipClick)) , f_MaterialRow36)) , $add_9(f_MaterialRow33, (f_PrettyPre37 = new PrettyPre , $setHTML_0(f_PrettyPre37, (sb_4 = new StringBuilder , sb_4.string += '\\u2003&lt;m:MaterialChip ui:field=\"chip\" url=\"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi9lfCkLutb7ugJlIjn84qWNoiICopC-Vyx7QQJRHF5E7GlqFG\" text=\"Yunalis Mat Zara\\'ai\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip ui:field=\"chipClick\" text=\"Click Me\" /&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre37.element_0, 'lang-xml', true) , f_PrettyPre37)) , $add_9(f_MaterialRow33, (f_PrettyPre38 = new PrettyPre , $setHTML_0(f_PrettyPre38, (sb_5 = new StringBuilder , sb_5.string += '\\u2003@UiField MaterialChip margin=\"8\" chip;<br><br>  chip.getIcon().addClickHandler(new ClickHandler() {<br> @Override<br> \\u2003public void onClick(ClickEvent event) {<br> \\u2003\\u2003MaterialToast.fireToast(chip.getText());<br> \\u2003}<br> });<br><br>  @UiHandler(\"chipClick\")<br> void onClickChip(ClickEvent e) {<br> \\u2003MaterialToast.fireToast(\"You clicked me\");<br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_5.string)).html_0) , setStyleName(f_PrettyPre38.element_0, 'lang-java', true) , f_PrettyPre38)) , setStyleName(f_MaterialRow33.element_0, 'code', true) , f_MaterialRow33), $get_0(this$static.domId4Element));\n  return f_HTMLPanel1;\n}\n\nfunction ChipsView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ChipsView_BinderImpl$Widgets$1;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ChipsView_BinderImpl$Widgets$2(this);\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n}\n\ndefineClass(1570, 1, {}, ChipsView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView_BinderImpl/Widgets', 1570);\nfunction ChipsView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(1571, 1, $intern_64, ChipsView_BinderImpl$Widgets$1);\n_.onClick_0 = function onClick_160(event_0){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'You clicked me', $intern_67, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView_BinderImpl/Widgets/1', 1571);\nfunction ChipsView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1572, 1, $intern_64, ChipsView_BinderImpl$Widgets$2);\n_.onClick_0 = function onClick_161(event_0){\n  $close_3(this.this$11.owner.chip);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView_BinderImpl/Widgets/2', 1572);\nfunction $html8(arg0, arg1, arg2, arg3, arg4){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_1(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$) {\n    result0 = new ChipsPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$) {\n    result = new ChipsView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$;\n}\n\ndefineClass(763, 1, $intern_109);\n_.onSuccess_0 = function onSuccess_24(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(23);\n\n//# sourceURL=gwtmaterialdemo-23.js\n")
