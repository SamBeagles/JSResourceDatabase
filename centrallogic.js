let x = 1;
let rtg = 1; //relative to gold constant
let title = "Gold";
let price = 1;
let priceStatus = 1;
let pricing = rtg*price;
let property = "Name : ";
let pHB = document.getElementsByClassName("pHB");
let pHL = document.getElementsByClassName("pHL");
let priceHigh = false;


//priceStatus is the upper and lower bounds of the cost of a material


        
const resource = {
            id: x,
            name: title,
            price: pricing,
            priceHigh: false,
            priceLow: false,
            togglePriceHigh: function(priceStatus){
                this.priceHigh = priceStatus;
            },
            togglePriceLow: function(priceStatus){
                this.priceLow = priceStatus;
            }
        };

        function high(){
            resource.price++;
            console.log(resource.price);
        }
        
        function low(){
            resource.price--;
            console.log(resource.price);
        }

       function PriceHigh(){
           if(resource.price===3){
           console.log(resource);
       }
       else {
           console.log(resource.price);
           }
       }
