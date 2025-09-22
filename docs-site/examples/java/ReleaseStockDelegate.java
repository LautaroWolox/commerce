package com.acme.checkout;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.stereotype.Component;

@Component
public class ReleaseStockDelegate implements JavaDelegate {
  @Override
  public void execute(DelegateExecution ctx) throws Exception {
    String orderId = (String) ctx.getVariable("orderId");
    // TODO: call Inventory service to release reservation
    System.out.println("Releasing stock for order " + orderId);
  }
}