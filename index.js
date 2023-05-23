const ourObj=[

                {name:"Iphone" ,model:"8", color:"blue" ,storage:"16gb"},
                {name:"Iphone" ,model:"X", color:"black" ,storage:"32gb"},
                {name:"Iphone" ,model:"xR", color:"red" ,storage:"64gb"},
                {name:"Iphone" ,model:"12", color:"green" ,storage:"132gb"},
                {name:"Iphone" ,model:"13", color:"yellow" ,storage:"256gb"},





];

                function findIphoneModel(phones){
                          if(phones.name === "Iphone" && model === "13"){

                            return phones.storage


                }
            }
            findIphoneModel(ourObj)


                function findIphoneModelByColor(colors){

                    if(colors.color === "yellow"){

                        return colors.model
                }
            }
            findIphoneModelByColor(ourObj)





            function findIPhoneColorByStorage(capacity){

                capacity.find((element)=>{if(element.storage === "256gb")
                (console.log(element.color))
            })
        }
        findIphoneModelByColor(ourObj)