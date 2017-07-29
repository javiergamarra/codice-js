import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {

  numberOfLicenses = 1;
  monthlyCost;

  constructor(private accountService: AccountService, private sharedService: SharedService) {
    this.monthlyCost = this.sharedService.stateChanged$;
  }

  ngOnInit() {
  }

  updateNumberLicenses(value) {
    if (AdComponent.isInteger(value)) {
      this.numberOfLicenses = value;
      this.updateNumberOfLicenses()
    }
  }

  increase() {
    this.resetIfNeeded() || this.numberOfLicenses++;
    this.updateNumberOfLicenses();
  }

  decrease() {
    this.resetIfNeeded() || this.numberOfLicenses > 0 ? this.numberOfLicenses-- : 1;
    this.updateNumberOfLicenses()
  }

  static isInteger(value) {
    return ~~value == value
  }

  private updateNumberOfLicenses() {
    this.accountService.updateDiscounts(this.numberOfLicenses)
      .subscribe(x => this.setTotalResultData(x),
        err => alert('Error calculating total: ' + err))
  }

  setTotalResultData(prize) {
    this.sharedService.emitState(`${prize}/mo`);
  }

  resetIfNeeded() {
    if (!AdComponent.isInteger(this.numberOfLicenses)) {
      this.numberOfLicenses = 1;
      return true;
    }
    return false;
  }

}

//      function setTotalResultData(calculateTotalResult) {
//
//        setMonthlyPrice(calculateTotalResult.formattedMonthlyPrice);
//        setFinalPrice(calculateTotalResult.finalMonthlyPriceText);
//
//        if (calculateTotalResult.discount == 0 &&
//          calculateTotalResult.availableCredit == 0) {
//          $("#discounts").hide();
//          return;
//        }
//
//        setDiscount(calculateTotalResult.formattedDiscount, calculateTotalResult.discountText);
//        setCredit(calculateTotalResult.formattedAvailableCredit);
//        $("#discounts").show();
//      }
//
//      function setDiscount(discount, discountText) {
//        if (discount == 0) {
//          $("#discount").hide();
//          return;
//        }
//        $("#discount-details").text(discount + " (" + discountText + ")");
//      }
//
//      function setCredit(availableCredit) {
//        if (availableCredit == 0) {
//          $("#credit").hide();
//          return;
//        }
//        $("#credit-details").text(availableCredit);
//      }
//
//      function setFinalPrice(finalPriceText) {
//        $("#finalprice-details").text(finalPriceText);
//        $("#finalprice-summary").text(finalPriceText);
//      }
