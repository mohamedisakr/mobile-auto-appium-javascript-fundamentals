class Dialog {
  get $appButton() {
    return $("~App");
  }

  get $username() {
    return $(
      "//android.widget.EditText[@resource-id='io.appium.android.apis:id/username_edit']"
    );
  }
}

module.exports = new Dialog();
