package gwt.material.design.demo.client.application.components.buttons.service;

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


import com.google.gwt.user.client.Random;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.rpc.AsyncCallback;
import gwt.material.design.demo.client.application.addins.datatable.table.People;
import gwt.material.design.demo.client.application.addins.datatable.table.Person;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FakeCarService implements CarServiceAsync {

    @Override
    public void getCar(int id, AsyncCallback<Car> callback) {
        new Timer() {
            @Override
            public void run() {
                callback.onSuccess(new Car(1, "Toyota Vios"));
            }
        }.schedule(3000);
    }
}
