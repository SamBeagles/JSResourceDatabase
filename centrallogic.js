let x = 1;
let rtg = 1; //relative to gold constant
let title = "Gold";
let price = 1;
let priceStatus = 1;
let pricing = rtg*price;
let property = "Name : ";
let pHB = document.getElementsByClassName("pHB");
let pHL = document.getElementsByClassName("pHL");
let priceHighState = false;
let priceLowState = false;

//priceStatus is the upper and lower bounds of the cost of a material


        
const resource = {
            id: x,
            name: title,
            price: pricing,
            priceHigh: priceHighState,
            priceLow: priceLowState,
            togglePriceHigh: function(priceStatus){
                this.priceHigh = priceStatus;
            },
            togglePriceLow: function(priceStatus){
                this.priceLow = priceStatus;
            }
        };

        function high(){
            if(resource.price>=3){
                resource.priceHigh = true;
                resource.price++;
                console.log(resource);
            }
            else if(resource.pricing<=-3){
                resource.priceHigh = false;
                resource.priceLow = true;
                resource.price++;
                console.log(resource)
            }
            else{
                resource.priceHigh = false;
                resource.priceLow = false;
                resource.price++;
                console.log(resource);
            }
            
        }
        
        function low(){
            if(resource.price<=-3){
                resource.priceHigh = false;
                resource.priceLow = true;
                resource.price--;
                console.log(resource);
            }
            else  if(resource.price>=5){
                resource.price--;
                resource.priceHigh = true;
                resource.priceLow = false;
                console.log(resource);
            }
            else{
            resource.price--;
            resource.priceHigh = false;
            resource.priceLow = false;
            console.log(resource);
            }
        }

        console.log(resource);
