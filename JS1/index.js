let cards =[
    {
        image:"https://3.bp.blogspot.com/-HLLaJ9gqng8/V1kj3VgcInI/AAAAAAAAFKE/oYUZriktTk0/w480-h800-c/thor-2-the-dark-world-2013-galaxy-note-hd-wallpaper.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://3.bp.blogspot.com/-HLLaJ9gqng8/V1kj3VgcInI/AAAAAAAAFKE/oYUZriktTk0/w480-h800-c/thor-2-the-dark-world-2013-galaxy-note-hd-wallpaper.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://fsa.zobj.net/crop.php?r=D4kNFU_N0tCWoLIuOR7SduhpuG5GUCiqY5HGhHuyRihz9uPpSATq6BlJp44ZInGGAJkIdNCMq2SqL8FkTcAMxghDgTn7ClB-UYi-p_GbdDsXkRW45_svvt211oyF4G0ICJ-JEYqHGFfnmd7Y3iRVqPqGBcDaYQ9XDzA_XCgiJVpPGDE1uJZZOkRvBTd4IHq7lgUiAusLLT82g-p2",
        value:2,
        status:"closed"
    },
    {
        image:"https://fsa.zobj.net/crop.php?r=D4kNFU_N0tCWoLIuOR7SduhpuG5GUCiqY5HGhHuyRihz9uPpSATq6BlJp44ZInGGAJkIdNCMq2SqL8FkTcAMxghDgTn7ClB-UYi-p_GbdDsXkRW45_svvt211oyF4G0ICJ-JEYqHGFfnmd7Y3iRVqPqGBcDaYQ9XDzA_XCgiJVpPGDE1uJZZOkRvBTd4IHq7lgUiAusLLT82g-p2",
        value:2,
        status:"closed"
    },
    {
        image:"https://r2.community.samsung.com/t5/image/serverpage/image-id/1086311iBC5418AD0E671A11/image-size/large?v=v2&px=999",
        value:3,
        status:"closed"
    },
    {
        image:"https://r2.community.samsung.com/t5/image/serverpage/image-id/1086311iBC5418AD0E671A11/image-size/large?v=v2&px=999",
        value:3,
        status:"closed"
    },
    {
        image:"https://s3-eu-west-1.amazonaws.com/images.linnlive.com/10fcdbb344fedb4f5569993c2388c6ed/b363d51a-a3c4-4196-908a-6258b6004bd0.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://s3-eu-west-1.amazonaws.com/images.linnlive.com/10fcdbb344fedb4f5569993c2388c6ed/b363d51a-a3c4-4196-908a-6258b6004bd0.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://fsa.zobj.net/crop.php?r=wCzwq-vW4lM_hqaUDPLfah0B9TB-2iH1KR0wuEJiEkIRCeHzhJqg0ncIztScHnTun84eEJvklkLywM62W3W3ug_Lk_55-LQfN-01DRAJgyEuyVEz1a95z4BBNajCAhPIZRv0pRxp9td6oZxN1Qscg8ed4eRvZn2YbPfiXpLl32RBFmOhV_2iUnTSeW_eLT2pYdmM6LStpjWTRTDD",
        value:5,
        status:"closed"
    },
    {
        image:"https://fsa.zobj.net/crop.php?r=wCzwq-vW4lM_hqaUDPLfah0B9TB-2iH1KR0wuEJiEkIRCeHzhJqg0ncIztScHnTun84eEJvklkLywM62W3W3ug_Lk_55-LQfN-01DRAJgyEuyVEz1a95z4BBNajCAhPIZRv0pRxp9td6oZxN1Qscg8ed4eRvZn2YbPfiXpLl32RBFmOhV_2iUnTSeW_eLT2pYdmM6LStpjWTRTDD",
        value:5,
        status:"closed"
    }
]

// durnsten shuffling algorithm
let temp;
for(let i=cards.length-1;i>=0;i--){
  
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;

}

let cardcopy=cards;
function displaycards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        <div class="card" style="background-image:url('${card.image}')">
        <div class="overlay ${card.status}" onclick="opencard(${index})"></div>
        
        </div>
        
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}

displaycards(cards);

let cardcount=1;
let val1=null,val2=null; 
let score=0;
function opencard(index){

    cards[index].status="opened";
    if(cardcount===1){
        val1=cards[index].value;
        cardcount++;
    }
    else if(cardcount===2){
        val2=cards[index].value;

        console.log(val1,val2);
        
        if(val1===val2){
            score++;
            document.getElementById('score').innerHTML=score;
            
            // reset after one guess
            val1=null;
            val2=null;
            cardcount=1;
        }
        else{
            alert("Game Over");
            location.reload();
        }
    }

    displaycards(cards);
}