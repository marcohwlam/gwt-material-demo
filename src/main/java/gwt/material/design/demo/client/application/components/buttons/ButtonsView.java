package gwt.material.design.demo.client.application.components.buttons;

/*
 * #%L
 * GwtMaterial
 * %%
 * Copyright (C) 2015 - 2016 GwtMaterialDesign
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */


import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.DoubleClickEvent;
import com.google.gwt.event.dom.client.MouseOverEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewImpl;
import gwt.material.design.client.async.LoadResultCallback;
import gwt.material.design.client.ui.MaterialButton;
import gwt.material.design.client.ui.MaterialToast;
import gwt.material.design.demo.client.application.components.buttons.service.Car;
import gwt.material.design.demo.client.application.components.buttons.service.CarService;
import gwt.material.design.demo.client.application.components.buttons.service.CarServiceAsync;
import gwt.material.design.demo.client.application.components.buttons.service.FakeCarService;

import javax.inject.Inject;

public class ButtonsView extends ViewImpl implements ButtonsPresenter.MyView {
    interface Binder extends UiBinder<Widget, ButtonsView> {
    }

    @UiField MaterialButton btnClick, btnHover, btnDoubleClick, asyncButton;

    @Inject
    ButtonsView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
    }

    @UiHandler("btnClick")
    void onClick(ClickEvent e) {
        MaterialToast.fireToast("Click Triggered");
        btnClick.setText("Clicked");
    }

    @UiHandler("btnHover")
    void onHover(MouseOverEvent e) {
        MaterialToast.fireToast("Hover Triggered");
        btnHover.setText("Hovered");
    }

    @UiHandler("btnDoubleClick")
    void onDoubleClick(DoubleClickEvent e) {
        MaterialToast.fireToast("Double Click Triggered");
        btnDoubleClick.setText("Double Clicked");
    }

    @UiHandler("asyncButton")
    void onAsyncButton(ClickEvent e) {

        // Will setup the LoadResultCallback where the async widget has predefined UX upon loading the request
        // and display the callback result returned by the server
        LoadResultCallback<Car, MaterialButton<Car>> loadResultCallback = new LoadResultCallback<>(asyncButton);

        // Let the user decide how they perform client to server mechanism (e.g RPC).
        final CarServiceAsync carServiceAsync = GWT.create(FakeCarService.class);
        carServiceAsync.getCar(1, new AsyncCallback<Car>() {
            @Override
            public void onFailure(Throwable throwable) {
                loadResultCallback.onFailure(throwable);
            }

            @Override
            public void onSuccess(Car car) {
                loadResultCallback.onSuccess(car);
            }
        });

        // Will perform the async load() method and call the asynccallback
        loadResultCallback.load();
    }
}
