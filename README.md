# AngWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


nvm i 9.*
npm i -g npm
npm i @angular/cli


## Pipe Currency Ex

{{ 66600 | currency }} <!-- will display $66,600.00  --> <br>
{{ 66600 | currency : 'CAD' }} <!-- will display CA$66,600.00  --> <br>
{{ 66600 | currency :'INR' }} <!-- will display ?66,600.00 --> <br>
{{ 66600 | currency :'INR' :'code' }} <!-- will display INR66,600.00 -->  <br>
{{ 66600 | currency :'INR' :'symbol' }} <!-- will display ?66,600.00 -->  <br>
{{ 66600 | currency :'INR' :'myOwnString' }} <!-- will display myOwnString66,600.00 -->  <br>
{{ 66600 | currency :'INR' :'code' :'6.2-3'}} <!-- will display INR066,600.00 --> <br>
{{ 66600 | currency :'INR' :'code' :'1.3'}} <!-- will display INR66,600.000 --> <br>

## Percent

{{ 0.2 | percent }} will display 20%
{{ 0.2 | percent:'2.2-3' }} will display 20.00%

## Number ex

{{ 35000 | number }} will display 35,000
{{ 35000 | number:'.3-5' }} will display 35,000.000



## pipe ex

### html

<h3> {{ title | titlecase}} </h3>
<table style="text-align:left">
    <tr>
        <th> Product Code </th>
        <td> {{ productCode | slice:5:9 }} </td>
    </tr>
    <tr>
        <th> Product Name </th>
        <td> {{ productName | uppercase }} </td>
    </tr>
    <tr>
        <th> Product Price </th>
        <td> {{ productPrice | currency: 'INR':'symbol' }} </td>
    </tr>
    <tr>
        <th> Purchase Date </th>
        <td> {{ purchaseDate | date:'fullDate' | lowercase}} </td>
    </tr>
    <tr>
        <th> Product Tax </th>
        <td> {{ productTax | percent : '.2' }} </td>
    </tr>
    <tr>
        <th> Product Rating </th>
        <td>{{ productRating | number:'1.3-5'}} </td>
    </tr>
</table>

### pipe ex ts

 title: string = "product details"
  productCode: string = "PROD_A001";
  productName: string = "Apple MacBook Pro"
  productPrice: number = 417021;
  purchaseDate: string = "1/17/2018"
  productTax: string = "2.1";
  productRating: number = 4.92;
