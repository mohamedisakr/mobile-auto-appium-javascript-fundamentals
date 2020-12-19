class Dialog {
  get $appButton() {
    return $("~App");
  }

  get $username() {
    return $(
      "//android.widget.EditText[@resource-id='io.appium.android.apis:id/username_edit']"
    );
  }

  get $everyMonday() {
    return $("//android.widget.CheckedTextView[@index='0']");
  }

  get $$everyday() {
    return $$("//android.widget.CheckedTextView");
  }
}

module.exports = new Dialog();
