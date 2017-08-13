import {observable, action} from "mobx"

class UiStore {
    @observable token = '';
    @observable isLogin = false;
    @observable userInfo = [];

    @action
    cleanData() {
        this.userInfo = [];
        this.isLogin = false;
        this.token = '';
    }
}

const uiStore = new UiStore();

export default uiStore;

export {UiStore}