package com.acme.checkout;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.stereotype.Component;

@Component
public class AuthorizePaymentDelegate implements JavaDelegate {
  @Override
  public void execute(DelegateExecution ctx) throws Exception {
    // Mock: set paymentApproved from a PSP response
    boolean approved = true;
    ctx.setVariable("paymentApproved", approved);
  }
}