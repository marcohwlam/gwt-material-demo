$wnd.gwtmaterialdemo.runAsyncCallback29("function $addMouseOutHandler(this$static, handler){\n  return $addDomHandler(this$static, new MaterialWidget$lambda$3$Type(this$static, handler), ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_7));\n}\n\nfunction $setTooltipPosition(this$static, position){\n  $setTooltipPosition_0((!this$static.tooltipMixin && (this$static.tooltipMixin = new TooltipMixin(this$static)) , this$static.tooltipMixin), position);\n}\n\nfunction $setTooltipPosition_0(this$static, position){\n  !this$static.tooltip_0 && (this$static.tooltip_0 = new MaterialTooltip_0(castTo(this$static.uiObject, 21)));\n  $setPosition_3(this$static.tooltip_0, position);\n}\n\nfunction $clinit_FABType(){\n  $clinit_FABType = emptyMethod;\n  HOVER = new FABType('HOVER', 0, '');\n  CLICK_ONLY = new FABType('CLICK_ONLY', 1, 'click-to-toggle');\n}\n\nfunction FABType(enum$name, enum$ordinal, cssClass){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.cssClass = cssClass;\n}\n\nfunction values_42(){\n  $clinit_FABType();\n  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_constants_FABType_2_classLit, 1), $intern_8, 323, 0, [HOVER, CLICK_ONLY]);\n}\n\ndefineClass(323, 27, {49:1, 140:1, 323:1, 119:1, 4:1, 38:1, 27:1}, FABType);\n_.getCssName = function getCssName_68(){\n  return this.cssClass;\n}\n;\nvar CLICK_ONLY, HOVER;\nvar Lgwt_material_design_client_constants_FABType_2_classLit = createForEnum('gwt.material.design.client.constants', 'FABType', 323, values_42);\nfunction $build_20(this$static){\n  if (castTo(this$static.typeMixin.type_0, 323) == ($clinit_FABType() , CLICK_ONLY)) {\n    this$static.clickHandler = $addClickHandler(this$static, new MaterialFAB$lambda$0$Type(this$static));\n  }\n   else {\n    this$static.mouseOverHandler = $addMouseOverHandler(this$static, new MaterialFAB$lambda$1$Type(this$static));\n    this$static.mouseOutHandler = $addMouseOutHandler(this$static, new MaterialFAB$lambda$2$Type(this$static));\n  }\n}\n\nfunction $close_4(this$static){\n  fire_1(this$static, this$static);\n  $wnd.$(($clinit_DOM() , this$static.element_0)).closeFAB();\n}\n\nfunction $lambda$0_26(this$static){\n  !$getElement(castTo((!this$static.enabledMixin && (this$static.enabledMixin = new EnabledMixin(this$static)) , this$static.enabledMixin).uiObject, 21)).hasAttribute('disabled') && ($hasClassName(($clinit_DOM() , this$static.element_0), 'active')?(fire_1(this$static, this$static) , $wnd.$(this$static.element_0).closeFAB()):(fire_2(this$static, this$static) , $wnd.$(this$static.element_0).openFAB()));\n}\n\nfunction $lambda$1_15(this$static){\n  fire_2(this$static, this$static);\n}\n\nfunction $lambda$2_12(this$static){\n  fire_1(this$static, this$static);\n}\n\nfunction $open_5(this$static){\n  fire_2(this$static, this$static);\n  $wnd.$(($clinit_DOM() , this$static.element_0)).openFAB();\n}\n\nfunction $setAxis_3(this$static, axis_0){\n  $setCssName(this$static.axisMixin, axis_0);\n}\n\nfunction $setType_9(this$static, type_0){\n  $setType_5(this$static.typeMixin, type_0);\n}\n\nfunction MaterialFAB(){\n  MaterialWidget_1.call(this, $doc.createElement('div'), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['fixed-action-btn']));\n  this.typeMixin = new CssTypeMixin(this);\n  this.axisMixin = new CssNameMixin(this);\n}\n\ndefineClass(277, 25, $intern_61, MaterialFAB);\n_.onLoad = function onLoad_23(){\n  $onLoad_0(this);\n  $build_20(this);\n}\n;\n_.onUnload = function onUnload_16(){\n  this.initialize = false;\n  if (this.clickHandler) {\n    $removeHandler(this.clickHandler.real);\n    this.clickHandler = null;\n  }\n  if (this.mouseOverHandler) {\n    $removeHandler(this.mouseOverHandler.real);\n    this.mouseOverHandler = null;\n  }\n  if (this.mouseOutHandler) {\n    $removeHandler(this.mouseOutHandler.real);\n    this.mouseOutHandler = null;\n  }\n}\n;\nfunction MaterialFAB$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1904, 1, $intern_64, MaterialFAB$lambda$0$Type);\n_.onClick_0 = function onClick_16(arg0){\n  $lambda$0_26(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialFAB$lambda$0$Type_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialFAB/lambda$0$Type', 1904);\nfunction MaterialFAB$lambda$1$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1905, 1, $intern_84, MaterialFAB$lambda$1$Type);\n_.onMouseOver = function onMouseOver_1(arg0){\n  $lambda$1_15(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialFAB$lambda$1$Type_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialFAB/lambda$1$Type', 1905);\nfunction MaterialFAB$lambda$2$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1906, 1, $intern_83, MaterialFAB$lambda$2$Type);\n_.onMouseOut = function onMouseOut_2(arg0){\n  $lambda$2_12(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_client_ui_MaterialFAB$lambda$2$Type_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialFAB/lambda$2$Type', 1906);\nfunction MaterialFABList(){\n  MaterialWidget_0.call(this, $doc.createElement('ul'));\n}\n\ndefineClass(294, 25, $intern_61, MaterialFABList);\n_.add_0 = function add_34(child){\n  $add_9(this, new ListItem_0(child));\n}\n;\nvar Lgwt_material_design_client_ui_MaterialFABList_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialFABList', 294);\nfunction FABPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(872, 57, $intern_54, FABPresenter);\n_.onReveal = function onReveal_50(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('FAB', 'FAB or Floating action buttons are used for a promoted action. They are distinguished by a circled icon floating above the UI and have motion behaviors that include morphing, launching, and a transferring anchor point.', 'components/fabs/FABView', 'https://material.io/guidelines/components/buttons-floating-action-button.html'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_fabs_FABPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABPresenter', 872);\nfunction FABView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_25(new FABView_BinderImpl$Widgets(this)));\n  $addHandler_0(this.btnFABEvent, new FABView$lambda$0$Type, (!TYPE_15 && (TYPE_15 = new GwtEvent$Type) , TYPE_15));\n  $addHandler_0(this.btnFABEvent, new FABView$lambda$1$Type, TYPE_14?TYPE_14:(TYPE_14 = new GwtEvent$Type));\n  $addHandler_0(this.btnClickOnlyFABEvent, new FABView$lambda$2$Type, (!TYPE_15 && (TYPE_15 = new GwtEvent$Type) , TYPE_15));\n  $addHandler_0(this.btnClickOnlyFABEvent, new FABView$lambda$3$Type, TYPE_14?TYPE_14:(TYPE_14 = new GwtEvent$Type));\n}\n\ndefineClass(1235, 60, $intern_55, FABView);\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView', 1235);\nfunction FABView$lambda$0$Type(){\n}\n\ndefineClass(1236, 1, $intern_99, FABView$lambda$0$Type);\n_.onOpen = function onOpen_13(arg0){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Opened Default FAB', $intern_67, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView/lambda$0$Type', 1236);\nfunction FABView$lambda$1$Type(){\n}\n\ndefineClass(1237, 1, $intern_48, FABView$lambda$1$Type);\n_.onClose_0 = function onClose_13(arg0){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Closed Default FAB', $intern_67, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView$lambda$1$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView/lambda$1$Type', 1237);\nfunction FABView$lambda$2$Type(){\n}\n\ndefineClass(1238, 1, $intern_99, FABView$lambda$2$Type);\n_.onOpen = function onOpen_14(arg0){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Opened Click Only FAB', $intern_67, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView$lambda$2$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView/lambda$2$Type', 1238);\nfunction FABView$lambda$3$Type(){\n}\n\ndefineClass(1239, 1, $intern_48, FABView$lambda$3$Type);\n_.onClose_0 = function onClose_14(arg0){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Closed Click Only FAB', $intern_67, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView$lambda$3$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView/lambda$3$Type', 1239);\nfunction $build_f_HTMLPanel1_25(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow13, f_MaterialRow25, f_MaterialRow38, f_MaterialRow51, f_MaterialTitle3, f_MaterialFAB4, f_MaterialButton5, f_MaterialFABList6, f_PrettyPre12, sb, f_MaterialTitle14, btnOpen, btnClose, f_MaterialRow15, f_MaterialColumn16, fab, f_PrettyPre24, sb_0, f_MaterialTitle26, f_MaterialRow27, f_MaterialColumn28, f_MaterialFAB29, f_PrettyPre37, sb_1, f_MaterialTitle39, f_MaterialRow40, f_MaterialColumn41, f_MaterialFAB42, f_PrettyPre50, sb_2, f_MaterialTitle52, f_MaterialRow53, f_MaterialColumn54, btnFABEvent, f_MaterialButton55, f_MaterialFABList56, btnClickOnlyFABEvent, f_MaterialButton62, f_MaterialFABList63, f_PrettyPre69, sb_3, f_MaterialAnchorButton7, f_MaterialAnchorButton8, f_MaterialAnchorButton9, f_MaterialAnchorButton10, f_MaterialAnchorButton11, f_MaterialButton17, f_MaterialFABList18, f_MaterialAnchorButton19, f_MaterialAnchorButton20, f_MaterialAnchorButton21, f_MaterialAnchorButton22, f_MaterialAnchorButton23, f_MaterialButton30, f_MaterialFABList31, f_MaterialAnchorButton32, f_MaterialAnchorButton33, f_MaterialAnchorButton34, f_MaterialAnchorButton35, f_MaterialAnchorButton36, f_MaterialButton43, f_MaterialFABList44, f_MaterialAnchorButton45, f_MaterialAnchorButton46, f_MaterialAnchorButton47, f_MaterialAnchorButton48, f_MaterialAnchorButton49, f_MaterialAnchorButton57, f_MaterialAnchorButton58, f_MaterialAnchorButton59, f_MaterialAnchorButton60, f_MaterialAnchorButton61, f_MaterialAnchorButton64, f_MaterialAnchorButton65, f_MaterialAnchorButton66, f_MaterialAnchorButton67, f_MaterialAnchorButton68;\n  f_HTMLPanel1 = new HTMLPanel($html6(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_12(f_MaterialTitle3.paragraph, 'If you want a fixed floating action button, you can add multiple actions that will appear on hover. Our demo is in the bottom righthand corner of the page.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Fixed Action Button'))).html_0)) , fire_5(f_MaterialTitle3, 'Fixed Action Button') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (f_MaterialFAB4 = new MaterialFAB , $add_9(f_MaterialFAB4, (f_MaterialButton5 = new MaterialButton , $setSize(f_MaterialButton5, ($clinit_ButtonSize() , LARGE)) , $setIconType_1(f_MaterialButton5, ($clinit_IconType() , POLYMER)) , $setType_3(f_MaterialButton5, ($clinit_ButtonType() , FLOATING)) , f_MaterialButton5)) , $add_9(f_MaterialFAB4, (f_MaterialFABList6 = new MaterialFABList , $add_9(f_MaterialFABList6, new ListItem_0((f_MaterialAnchorButton7 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton7, ($clinit_WavesType() , LIGHT)) , $setIconType_1(f_MaterialAnchorButton7, POLYMER) , $setType_3(f_MaterialAnchorButton7, FLOATING) , f_MaterialAnchorButton7))) , $add_9(f_MaterialFABList6, new ListItem_0((f_MaterialAnchorButton8 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton8, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton8, ($clinit_Color() , GREEN)) , $setIconType_1(f_MaterialAnchorButton8, POLYMER) , $setType_3(f_MaterialAnchorButton8, FLOATING) , f_MaterialAnchorButton8))) , $add_9(f_MaterialFABList6, new ListItem_0((f_MaterialAnchorButton9 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton9, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton9, RED) , $setIconType_1(f_MaterialAnchorButton9, POLYMER) , $setType_3(f_MaterialAnchorButton9, FLOATING) , f_MaterialAnchorButton9))) , $add_9(f_MaterialFABList6, new ListItem_0((f_MaterialAnchorButton10 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton10, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton10, ORANGE) , $setIconType_1(f_MaterialAnchorButton10, POLYMER) , $setType_3(f_MaterialAnchorButton10, FLOATING) , f_MaterialAnchorButton10))) , $add_9(f_MaterialFABList6, new ListItem_0((f_MaterialAnchorButton11 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton11, LIGHT) , $setIconType_1(f_MaterialAnchorButton11, POLYMER) , $setType_3(f_MaterialAnchorButton11, FLOATING) , f_MaterialAnchorButton11))) , f_MaterialFABList6)) , f_MaterialFAB4.element_0.style['zIndex'] = '995' , f_MaterialFAB4)) , $add_9(f_MaterialRow2, (f_PrettyPre12 = new PrettyPre , $setHTML_0(f_PrettyPre12, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialFAB&gt;<br> \\u2003&lt;m:MaterialAnchorButton type=\"FLOATING\" iconType=\"POLYMER\" size=\"LARGE\"/&gt;<br> \\u2003&lt;m:MaterialFABList&gt;<br> \\u2003\\u2003&lt;m:MaterialAnchorButton type=\"FLOATING\" waves=\"LIGHT\" iconType=\"POLYMER\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialAnchorButton type=\"FLOATING\" waves=\"LIGHT\" backgroundColor=\"GREEN\" iconType=\"POLYMER\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialAnchorButton type=\"FLOATING\" waves=\"LIGHT\" backgroundColor=\"RED\" iconType=\"POLYMER\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialAnchorButton type=\"FLOATING\" waves=\"LIGHT\" backgroundColor=\"ORANGE\" iconType=\"POLYMER\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialAnchorButton type=\"FLOATING\" waves=\"LIGHT\" iconType=\"POLYMER\"/&gt;<br> \\u2003&lt;/m:MaterialFABList&gt;<br> &lt;/m:MaterialFAB&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre12.element_0, 'lang-xml', true) , f_PrettyPre12)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow13 = new MaterialRow , $add_9(f_MaterialRow13, (f_MaterialTitle14 = new MaterialTitle , $setText_12(f_MaterialTitle14.paragraph, 'You can also open the Fixed Action Button Menu programatically.') , $setInnerHTML($getElement(f_MaterialTitle14.header), (new SafeHtmlString(htmlEscape('Open / Close FAB'))).html_0) , fire_5(f_MaterialTitle14, 'Open / Close FAB') , f_MaterialTitle14)) , $add_9(f_MaterialRow13, (btnOpen = new MaterialButton , $setText_8(btnOpen.span_1, 'Open') , btnOpen.span_1.attached || $add_9(btnOpen, btnOpen.span_1) , $addClickHandler(btnOpen, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , btnOpen)) , $add_9(f_MaterialRow13, (btnClose = new MaterialButton , $setBackgroundColor(btnClose, WHITE) , $setText_8(btnClose.span_1, 'Close') , btnClose.span_1.attached || $add_9(btnClose, btnClose.span_1) , $setTextColor(btnClose, BLACK) , $addClickHandler(btnClose, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , btnClose)) , $add_9(f_MaterialRow13, (f_MaterialRow15 = new MaterialRow , $add_9(f_MaterialRow15, (f_MaterialColumn16 = new MaterialColumn , $add_9(f_MaterialColumn16, (fab = new MaterialFAB , $add_9(fab, (f_MaterialButton17 = new MaterialButton , $setSize(f_MaterialButton17, LARGE) , $setIconType_1(f_MaterialButton17, POLYMER) , $setType_3(f_MaterialButton17, FLOATING) , f_MaterialButton17)) , $add_9(fab, (f_MaterialFABList18 = new MaterialFABList , $add_9(f_MaterialFABList18, new ListItem_0((f_MaterialAnchorButton19 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton19, LIGHT) , $setIconType_1(f_MaterialAnchorButton19, POLYMER) , $setType_3(f_MaterialAnchorButton19, FLOATING) , f_MaterialAnchorButton19))) , $add_9(f_MaterialFABList18, new ListItem_0((f_MaterialAnchorButton20 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton20, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton20, GREEN) , $setIconType_1(f_MaterialAnchorButton20, POLYMER) , $setType_3(f_MaterialAnchorButton20, FLOATING) , f_MaterialAnchorButton20))) , $add_9(f_MaterialFABList18, new ListItem_0((f_MaterialAnchorButton21 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton21, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton21, RED) , $setIconType_1(f_MaterialAnchorButton21, POLYMER) , $setType_3(f_MaterialAnchorButton21, FLOATING) , f_MaterialAnchorButton21))) , $add_9(f_MaterialFABList18, new ListItem_0((f_MaterialAnchorButton22 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton22, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton22, ORANGE) , $setIconType_1(f_MaterialAnchorButton22, POLYMER) , $setType_3(f_MaterialAnchorButton22, FLOATING) , f_MaterialAnchorButton22))) , $add_9(f_MaterialFABList18, new ListItem_0((f_MaterialAnchorButton23 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton23, LIGHT) , $setIconType_1(f_MaterialAnchorButton23, POLYMER) , $setType_3(f_MaterialAnchorButton23, FLOATING) , f_MaterialAnchorButton23))) , f_MaterialFABList18)) , fab.element_0.style['zIndex'] = '995' , $setLayoutPosition(fab, ($clinit_Style$Position() , ABSOLUTE)) , fab.element_0.style['right'] = ($clinit_Style$Unit() , '0.0px') , $setAxis_3(fab, ($clinit_Axis() , HORIZONTAL)) , this$static.owner.fab = fab , fab)) , $setLayoutPosition(f_MaterialColumn16, RELATIVE) , $setGrid_0((!f_MaterialColumn16.gridMixin && (f_MaterialColumn16.gridMixin = new GridMixin(f_MaterialColumn16)) , f_MaterialColumn16.gridMixin), 'l6 m6 s12') , f_MaterialColumn16.element_0.style['height'] = '80px' , f_MaterialColumn16)) , f_MaterialRow15)) , $add_9(f_MaterialRow13, (f_PrettyPre24 = new PrettyPre , $setHTML_0(f_PrettyPre24, (sb_0 = new StringBuilder , sb_0.string += '\\u2003@UiField MaterialFAB fab;<br><br> fab.open();<br> fab.close();<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre24.element_0, 'lang-java', true) , f_PrettyPre24)) , setStyleName(f_MaterialRow13.element_0, 'code', true) , f_MaterialRow13), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow25 = new MaterialRow , $add_9(f_MaterialRow25, (f_MaterialTitle26 = new MaterialTitle , $setText_12(f_MaterialTitle26.paragraph, \"Creating a horizontal FAB is easy! Just add axis='HORIZONTAL'.\") , $setInnerHTML($getElement(f_MaterialTitle26.header), (new SafeHtmlString(htmlEscape('FAB Type : Horizontal'))).html_0) , fire_5(f_MaterialTitle26, 'FAB Type : Horizontal') , f_MaterialTitle26)) , $add_9(f_MaterialRow25, (f_MaterialRow27 = new MaterialRow , $add_9(f_MaterialRow27, (f_MaterialColumn28 = new MaterialColumn , $add_9(f_MaterialColumn28, (f_MaterialFAB29 = new MaterialFAB , $add_9(f_MaterialFAB29, (f_MaterialButton30 = new MaterialButton , $setSize(f_MaterialButton30, LARGE) , $setIconType_1(f_MaterialButton30, POLYMER) , $setType_3(f_MaterialButton30, FLOATING) , f_MaterialButton30)) , $add_9(f_MaterialFAB29, (f_MaterialFABList31 = new MaterialFABList , $add_9(f_MaterialFABList31, new ListItem_0((f_MaterialAnchorButton32 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton32, LIGHT) , $setIconType_1(f_MaterialAnchorButton32, POLYMER) , $setType_3(f_MaterialAnchorButton32, FLOATING) , f_MaterialAnchorButton32))) , $add_9(f_MaterialFABList31, new ListItem_0((f_MaterialAnchorButton33 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton33, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton33, GREEN) , $setIconType_1(f_MaterialAnchorButton33, POLYMER) , $setType_3(f_MaterialAnchorButton33, FLOATING) , f_MaterialAnchorButton33))) , $add_9(f_MaterialFABList31, new ListItem_0((f_MaterialAnchorButton34 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton34, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton34, RED) , $setIconType_1(f_MaterialAnchorButton34, POLYMER) , $setType_3(f_MaterialAnchorButton34, FLOATING) , f_MaterialAnchorButton34))) , $add_9(f_MaterialFABList31, new ListItem_0((f_MaterialAnchorButton35 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton35, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton35, ORANGE) , $setIconType_1(f_MaterialAnchorButton35, POLYMER) , $setType_3(f_MaterialAnchorButton35, FLOATING) , f_MaterialAnchorButton35))) , $add_9(f_MaterialFABList31, new ListItem_0((f_MaterialAnchorButton36 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton36, LIGHT) , $setIconType_1(f_MaterialAnchorButton36, POLYMER) , $setType_3(f_MaterialAnchorButton36, FLOATING) , f_MaterialAnchorButton36))) , f_MaterialFABList31)) , f_MaterialFAB29.element_0.style['zIndex'] = '995' , $setLayoutPosition(f_MaterialFAB29, ABSOLUTE) , f_MaterialFAB29.element_0.style['right'] = '0.0px' , $setAxis_3(f_MaterialFAB29, HORIZONTAL) , f_MaterialFAB29)) , $setLayoutPosition(f_MaterialColumn28, RELATIVE) , $setGrid_0((!f_MaterialColumn28.gridMixin && (f_MaterialColumn28.gridMixin = new GridMixin(f_MaterialColumn28)) , f_MaterialColumn28.gridMixin), 'l6 m6 s12') , f_MaterialColumn28.element_0.style['height'] = '80px' , f_MaterialColumn28)) , f_MaterialRow27)) , $add_9(f_MaterialRow25, (f_PrettyPre37 = new PrettyPre , $setHTML_0(f_PrettyPre37, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialFAB axis=\"HORIZONTAL\"&gt;<br> \\u2003&lt;-- Content here --&gt;<br> &lt;/m:MaterialFAB&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre37.element_0, 'lang-xml', true) , f_PrettyPre37)) , setStyleName(f_MaterialRow25.element_0, 'code', true) , f_MaterialRow25), $get_0(this$static.domId2Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow38 = new MaterialRow , $add_9(f_MaterialRow38, (f_MaterialTitle39 = new MaterialTitle , $setText_12(f_MaterialTitle39.paragraph, \"If you want to disable the hover behaviour, and instead toggle the FAB menu when the user clicks on the large button (works great on mobile!), Just add type='CLICK_ONLY'\") , $setInnerHTML($getElement(f_MaterialTitle39.header), (new SafeHtmlString(htmlEscape('FAB Type : Click Only'))).html_0) , fire_5(f_MaterialTitle39, 'FAB Type : Click Only') , f_MaterialTitle39)) , $add_9(f_MaterialRow38, (f_MaterialRow40 = new MaterialRow , $add_9(f_MaterialRow40, (f_MaterialColumn41 = new MaterialColumn , $add_9(f_MaterialColumn41, (f_MaterialFAB42 = new MaterialFAB , $add_9(f_MaterialFAB42, (f_MaterialButton43 = new MaterialButton , $setSize(f_MaterialButton43, LARGE) , $setIconType_1(f_MaterialButton43, POLYMER) , $setType_3(f_MaterialButton43, FLOATING) , f_MaterialButton43)) , $add_9(f_MaterialFAB42, (f_MaterialFABList44 = new MaterialFABList , $add_9(f_MaterialFABList44, new ListItem_0((f_MaterialAnchorButton45 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton45, LIGHT) , $setIconType_1(f_MaterialAnchorButton45, POLYMER) , $setType_3(f_MaterialAnchorButton45, FLOATING) , f_MaterialAnchorButton45))) , $add_9(f_MaterialFABList44, new ListItem_0((f_MaterialAnchorButton46 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton46, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton46, GREEN) , $setIconType_1(f_MaterialAnchorButton46, POLYMER) , $setType_3(f_MaterialAnchorButton46, FLOATING) , f_MaterialAnchorButton46))) , $add_9(f_MaterialFABList44, new ListItem_0((f_MaterialAnchorButton47 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton47, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton47, RED) , $setIconType_1(f_MaterialAnchorButton47, POLYMER) , $setType_3(f_MaterialAnchorButton47, FLOATING) , f_MaterialAnchorButton47))) , $add_9(f_MaterialFABList44, new ListItem_0((f_MaterialAnchorButton48 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton48, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton48, ORANGE) , $setIconType_1(f_MaterialAnchorButton48, POLYMER) , $setType_3(f_MaterialAnchorButton48, FLOATING) , f_MaterialAnchorButton48))) , $add_9(f_MaterialFABList44, new ListItem_0((f_MaterialAnchorButton49 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton49, LIGHT) , $setIconType_1(f_MaterialAnchorButton49, POLYMER) , $setType_3(f_MaterialAnchorButton49, FLOATING) , f_MaterialAnchorButton49))) , f_MaterialFABList44)) , f_MaterialFAB42.element_0.style['zIndex'] = '995' , $setLayoutPosition(f_MaterialFAB42, ABSOLUTE) , f_MaterialFAB42.element_0.style['right'] = '0.0px' , $setType_9(f_MaterialFAB42, ($clinit_FABType() , CLICK_ONLY)) , $setAxis_3(f_MaterialFAB42, HORIZONTAL) , f_MaterialFAB42)) , $setLayoutPosition(f_MaterialColumn41, RELATIVE) , $setGrid_0((!f_MaterialColumn41.gridMixin && (f_MaterialColumn41.gridMixin = new GridMixin(f_MaterialColumn41)) , f_MaterialColumn41.gridMixin), 'l6 m6 s12') , f_MaterialColumn41.element_0.style['height'] = '80px' , f_MaterialColumn41)) , f_MaterialRow40)) , $add_9(f_MaterialRow38, (f_PrettyPre50 = new PrettyPre , $setHTML_0(f_PrettyPre50, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialFAB type=\"CLICK_ONLY\"&gt;<br> \\u2003&lt;-- Content here --&gt;<br> &lt;/m:MaterialFAB&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre50.element_0, 'lang-xml', true) , f_PrettyPre50)) , setStyleName(f_MaterialRow38.element_0, 'code', true) , f_MaterialRow38), $get_0(this$static.domId3Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow51 = new MaterialRow , $add_9(f_MaterialRow51, (f_MaterialTitle52 = new MaterialTitle , $setText_12(f_MaterialTitle52.paragraph, 'We provided Open and Close Events for FAB') , $setInnerHTML($getElement(f_MaterialTitle52.header), (new SafeHtmlString(htmlEscape('Events'))).html_0) , fire_5(f_MaterialTitle52, 'Events') , f_MaterialTitle52)) , $add_9(f_MaterialRow51, (f_MaterialRow53 = new MaterialRow , $add_9(f_MaterialRow53, (f_MaterialColumn54 = new MaterialColumn , $add_9(f_MaterialColumn54, (btnFABEvent = new MaterialFAB , $add_9(btnFABEvent, (f_MaterialButton55 = new MaterialButton , $setSize(f_MaterialButton55, LARGE) , $setIconType_1(f_MaterialButton55, POLYMER) , $setTooltip((!f_MaterialButton55.tooltipMixin && (f_MaterialButton55.tooltipMixin = new TooltipMixin(f_MaterialButton55)) , f_MaterialButton55.tooltipMixin), 'Hover') , $setTooltipPosition(f_MaterialButton55, ($clinit_Position() , RIGHT_8)) , $setType_3(f_MaterialButton55, FLOATING) , f_MaterialButton55)) , $add_9(btnFABEvent, (f_MaterialFABList56 = new MaterialFABList , $add_9(f_MaterialFABList56, new ListItem_0((f_MaterialAnchorButton57 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton57, LIGHT) , $setIconType_1(f_MaterialAnchorButton57, POLYMER) , $setType_3(f_MaterialAnchorButton57, FLOATING) , f_MaterialAnchorButton57))) , $add_9(f_MaterialFABList56, new ListItem_0((f_MaterialAnchorButton58 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton58, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton58, GREEN) , $setIconType_1(f_MaterialAnchorButton58, POLYMER) , $setType_3(f_MaterialAnchorButton58, FLOATING) , f_MaterialAnchorButton58))) , $add_9(f_MaterialFABList56, new ListItem_0((f_MaterialAnchorButton59 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton59, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton59, RED) , $setIconType_1(f_MaterialAnchorButton59, POLYMER) , $setType_3(f_MaterialAnchorButton59, FLOATING) , f_MaterialAnchorButton59))) , $add_9(f_MaterialFABList56, new ListItem_0((f_MaterialAnchorButton60 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton60, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton60, ORANGE) , $setIconType_1(f_MaterialAnchorButton60, POLYMER) , $setType_3(f_MaterialAnchorButton60, FLOATING) , f_MaterialAnchorButton60))) , $add_9(f_MaterialFABList56, new ListItem_0((f_MaterialAnchorButton61 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton61, LIGHT) , $setIconType_1(f_MaterialAnchorButton61, POLYMER) , $setType_3(f_MaterialAnchorButton61, FLOATING) , f_MaterialAnchorButton61))) , f_MaterialFABList56)) , btnFABEvent.element_0.style['zIndex'] = '995' , $setLayoutPosition(btnFABEvent, ABSOLUTE) , btnFABEvent.element_0.style['right'] = '0.0px' , $setAxis_3(btnFABEvent, HORIZONTAL) , this$static.owner.btnFABEvent = btnFABEvent , btnFABEvent)) , $add_9(f_MaterialColumn54, (btnClickOnlyFABEvent = new MaterialFAB , $add_9(btnClickOnlyFABEvent, (f_MaterialButton62 = new MaterialButton , $setBackgroundColor(f_MaterialButton62, RED) , $setSize(f_MaterialButton62, LARGE) , $setIconType_1(f_MaterialButton62, POLYMER) , $setTooltip((!f_MaterialButton62.tooltipMixin && (f_MaterialButton62.tooltipMixin = new TooltipMixin(f_MaterialButton62)) , f_MaterialButton62.tooltipMixin), 'Click') , $setTooltipPosition(f_MaterialButton62, RIGHT_8) , $setType_3(f_MaterialButton62, FLOATING) , f_MaterialButton62)) , $add_9(btnClickOnlyFABEvent, (f_MaterialFABList63 = new MaterialFABList , $add_9(f_MaterialFABList63, new ListItem_0((f_MaterialAnchorButton64 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton64, LIGHT) , $setIconType_1(f_MaterialAnchorButton64, POLYMER) , $setType_3(f_MaterialAnchorButton64, FLOATING) , f_MaterialAnchorButton64))) , $add_9(f_MaterialFABList63, new ListItem_0((f_MaterialAnchorButton65 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton65, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton65, GREEN) , $setIconType_1(f_MaterialAnchorButton65, POLYMER) , $setType_3(f_MaterialAnchorButton65, FLOATING) , f_MaterialAnchorButton65))) , $add_9(f_MaterialFABList63, new ListItem_0((f_MaterialAnchorButton66 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton66, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton66, RED) , $setIconType_1(f_MaterialAnchorButton66, POLYMER) , $setType_3(f_MaterialAnchorButton66, FLOATING) , f_MaterialAnchorButton66))) , $add_9(f_MaterialFABList63, new ListItem_0((f_MaterialAnchorButton67 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton67, LIGHT) , $setBackgroundColor(f_MaterialAnchorButton67, ORANGE) , $setIconType_1(f_MaterialAnchorButton67, POLYMER) , $setType_3(f_MaterialAnchorButton67, FLOATING) , f_MaterialAnchorButton67))) , $add_9(f_MaterialFABList63, new ListItem_0((f_MaterialAnchorButton68 = new MaterialAnchorButton , $setWaves(f_MaterialAnchorButton68, LIGHT) , $setIconType_1(f_MaterialAnchorButton68, POLYMER) , $setType_3(f_MaterialAnchorButton68, FLOATING) , f_MaterialAnchorButton68))) , f_MaterialFABList63)) , btnClickOnlyFABEvent.element_0.style['zIndex'] = '995' , btnClickOnlyFABEvent.element_0.style['top'] = '80.0px' , $setLayoutPosition(btnClickOnlyFABEvent, ABSOLUTE) , btnClickOnlyFABEvent.element_0.style['right'] = '0.0px' , $setType_9(btnClickOnlyFABEvent, CLICK_ONLY) , $setAxis_3(btnClickOnlyFABEvent, HORIZONTAL) , this$static.owner.btnClickOnlyFABEvent = btnClickOnlyFABEvent , btnClickOnlyFABEvent)) , $setLayoutPosition(f_MaterialColumn54, RELATIVE) , $setGrid_0((!f_MaterialColumn54.gridMixin && (f_MaterialColumn54.gridMixin = new GridMixin(f_MaterialColumn54)) , f_MaterialColumn54.gridMixin), 'l6 m6 s12') , f_MaterialColumn54.element_0.style['height'] = '80px' , f_MaterialColumn54)) , f_MaterialRow53)) , $add_9(f_MaterialRow51, (f_PrettyPre69 = new PrettyPre , $setHTML_0(f_PrettyPre69, (sb_3 = new StringBuilder , sb_3.string += 'btnFABEvent.addOpenHandler(openEvent -&gt; MaterialToast.fireToast(\"Opened Default FAB\")); <br> btnFABEvent.addCloseHandler(closeEvent -&gt; MaterialToast.fireToast(\"Closed Default FAB\")); <br> btnClickOnlyFABEvent.addOpenHandler(openEvent -&gt; MaterialToast.fireToast(\"Opened Click Only FAB\")); <br> btnClickOnlyFABEvent.addCloseHandler(closeEvent -&gt; MaterialToast.fireToast(\"Closed Click Only FAB\")); <br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre69.element_0, 'lang-java', true) , f_PrettyPre69.element_0.style['marginTop'] = '100.0px' , f_PrettyPre69)) , setStyleName(f_MaterialRow51.element_0, 'code', true) , f_MaterialRow51), $get_0(this$static.domId4Element));\n  return f_HTMLPanel1;\n}\n\nfunction FABView_BinderImpl$Widgets(owner){\n  var style;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new FABView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new FABView_BinderImpl$Widgets$2(this);\n  this.owner = owner;\n  style = ($clinit_FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_13);\n  $ensureInjected_12(style);\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n}\n\ndefineClass(1619, 1, {}, FABView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView_BinderImpl/Widgets', 1619);\nfunction FABView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1620, 1, $intern_64, FABView_BinderImpl$Widgets$1);\n_.onClick_0 = function onClick_217(event_0){\n  $open_5(this.this$11.owner.fab);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView_BinderImpl/Widgets/1', 1620);\nfunction FABView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1621, 1, $intern_64, FABView_BinderImpl$Widgets$2);\n_.onClick_0 = function onClick_218(event_0){\n  $close_4(this.this$11.owner.fab);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView_BinderImpl/Widgets/2', 1621);\nvar style_13;\nfunction $ensureInjected_12(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push(toInject, '');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(2206, 1, {}, FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_158(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_components_fabs_FABView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.fabs', 'FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 2206);\nfunction $clinit_FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_13 = new FABView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html6(arg0, arg1, arg2, arg3, arg4){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_1(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_1(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$fabs$FABPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$fabs$FABPresenter$_annotation$$none$$) {\n    result0 = new FABPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$fabs$FABView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$fabs$FABPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$fabs$FABPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$fabs$FABPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$fabs$FABView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$fabs$FABView$_annotation$$none$$) {\n    result = new FABView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$fabs$FABView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$fabs$FABView$_annotation$$none$$;\n}\n\ndefineClass(765, 1, $intern_109);\n_.onSuccess_0 = function onSuccess_30(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$fabs$FABPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(29);\n\n//# sourceURL=gwtmaterialdemo-29.js\n")
