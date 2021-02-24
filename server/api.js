const axios= require('axios');

const getData= async (req,res)=>{
    await axios.get("https://restcountries.eu/rest/v2/all")
    .then((response)=>{
        const Data=response.data;
        const countryData=[];
        for(i=0;i<Data.length;i++){
            countryData.push({
                number:i+1,
                name:Data[i].name,
                capital:Data[i].capital,
                region:Data[i].region,
                population:Data[i].population,
                flag:Data[i].flag
            });
        }
        res.send(countryData);
        console.log("Delivered data");
    })
    .catch((err)=>{
        console.log(err)
    });
};

const searchName= async (req,res)=>{
    const name= req.params.name;
    await axios.get("https://restcountries.eu/rest/v2/name/"+name)
    .then((response)=>{
        const Data=response.data;
        const countryData=[];
        for(i=0;i<Data.length;i++){
            countryData.push({
                number:i+1,
                name:Data[i].name,
                capital:Data[i].capital,
                region:Data[i].region,
                population:Data[i].population,
                flag:Data[i].flag
            });
        }
        res.send(countryData);
        console.log("Delivered data");
    })
    .catch((err)=>{
        res.send([])
    });
};

module.exports= {getData,searchName};