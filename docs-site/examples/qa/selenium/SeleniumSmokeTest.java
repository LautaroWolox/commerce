package com.acme.e2e;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumSmokeTest {
  public static void main(String[] args) {
    WebDriver driver = new ChromeDriver();
    driver.get("https://shop.example.com");
    driver.findElement(By.cssSelector("[data-test='login']")).click();
    // ... completar login y smoke
    driver.quit();
  }
}