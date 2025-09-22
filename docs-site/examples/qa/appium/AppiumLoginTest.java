package com.acme.mobile;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import org.openqa.selenium.By;
import java.net.URL;

public class AppiumLoginTest {
  public static void main(String[] args) throws Exception {
    UiAutomator2Options options = new UiAutomator2Options()
      .setDeviceName("Android Emulator")
      .setApp(System.getProperty("user.dir") + "/app-debug.apk");
    AppiumDriver driver = new AppiumDriver(new URL("http://localhost:4723/"), options);
    driver.findElement(By.id("loginButton")).click();
    // ... flujo corto
    driver.quit();
  }
}