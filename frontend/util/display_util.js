import React from 'react';

export const displayRating = rating =>{
  let stars = Array(10).fill(null);
  const score = rating * 2;
  const numStarHalves =Array(stars.length / 2).fill(null).map( (half, idx) => idx);

  for( let i=0; i<score; i++){
    stars[i]= true;
  }

  return (
    <section className="star-container">
      <span className="star-sub-container">
        {numStarHalves.map(starHalfIdx => htmlRatingDispaly( stars[ starHalfIdx*2 ], stars[ starHalfIdx*2 + 1], starHalfIdx ))}
      </span>
    </section> )
}

const htmlRatingDispaly = ( lefthalf, righthalf, idx ) =>{
  return(
    <figure key={idx} className="star">
      <figure className="left-half">
        <div className={filled(lefthalf)}>
          {dispStar(lefthalf)}
        </div>
      </figure>
      <figure className="right-half">
        <div className={filled(righthalf)}>
          {dispStar(righthalf)}
        </div>
      </figure>
    </figure>
  )
}

const filled = half =>(
  half ? "filled" : "empty"
)

const dispStar = half =>(
  half ? lightning() : "0"
)

const lightning = () =>(
  <img alt="lighting bolt" className="rating-img"
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAzFBMVEUAAAD/bwD/fwD/kgz/iAb/ggL/xin/qB7/ggP/ewD/jBf/qBX/gwf/hwz/iwf/wB//hw7/ihL/kBL/nhn/shj/hwn/jAv/kw//pBD/rhr/lQr/yEL/wj7/5kv/4kn/6kn/2lD/3kj/zUT/7kv/vDz/1FP/52//80n//Ur/0ln/6mX/7ln/2kb/5Hz/tjn/30//yF//+Ej/rzX/1EX/8UH/4Yr/lh3/6jv/zl3/qC3/nyf/uCn/2TT/4Tf/0Sz/4V3/wlL/uEj/2n7/0W1jkf6gAAAAG3RSTlMACB6OTSv+/jwU+8trsVryzOzc7tmAnLyi8Wrk69w8AAAEA0lEQVR42qWUhZqbQBRG44TdjXtw4gZx1/b936k/cyEKbfnmsP08p/fMXIj8m6iYTFSq+UJejITnofiJZ/KFr6/1+isT5VXs97v5fLf+4VXcbtfr9LYrxsJoxIqngIMUhCXEI2FIQALFbjcHt+md66GUDiWqfO1JYoHr3bOVhVo01AFl1p4G3DXbrSU0I2GIFfeupd1u37YAFiAdcNRhSH/t5qQB163LYCDjqEPxgzLHc4NHvt49ZrijBtX13B1HluXBAA6GdMBRh0HM7+fMI4PrwKPTxlGHIlnY3T2SeReFPGqQXTORo5EkdxrQxlGHo4IjIg9MHVjYE/6oo5n93O2SUAYJ/jDQDkcdch1R5ok6BAayhJ9wHqwjRKSBiI0D5Plfjzoa9VtHKpOA2RnoeoeOuhqwLLG08+WqfR5gdT9/eHQ8Dqb1cdRRMuSLhTUopD/XkZVJrkiHCi75cdTRh8H9eratg1DxW0d3INM0XY9utvc/zgzJV4N1u05///51wcsjfogSOCLPs9ABiUpxqoDgYfi1ApOLmWokfNZxb3kDocxFkuc7R/BiICb64nyI+66jRR6g2+RZmJJ0vW7J8MrFGB9T3zHfdWx7HpSRqdudOKwm4BeeFf4RF8MYnxH2Sbo0v3sWtm07Lmhe6Xoa21CNI4V9rqMlex44YLK7QWAcVfULo3Vsex6IwGUYpLGhUYwjwnyI5ndsoAUYk+eDC/sjDwaKR/2/jnOZPOOFYdvqxU8DoLFVRdFOZ/8wrKPlzeMMNALD0QuXkU04HtU/DFSENs0zHhu2MnpDsW1jzLBVx6OdAsKwjjuZPLiQJ09rpCmKohrQ6K7HhicgDIjFgwQNeVoMDT9wLBpEqqPSIWPzQBQUhnVsmzSOqrhoDq7SETltzNMKDAM/ggwPafBzCBg9hmsCNvNsjggLoHowWRUN4RlmjIdIVWigHML8EWuHBdOQYoYHhv6sz4CJRMzT2gSFgWQpNVahIQkZHsxmmjcQhg0OAwnhCA/F9F9A2XK5OdF1Yp7eMjgMVA7HzfLFMgMwbE7HcypXLsvsIuBpbc7BYVjH1GkJy6fhux5vJpJinI4Q6cvgMBArn+FZQvBmiEXpP6odsELOTSw3CAsm3ThufA33u5DHNBCFBZJdC/4Gl6xgGioLO1FYYFqWDMHrusBALCwb4UD8xpbdwzhIlyQDA1EYDxWU8Ye5l685YXWOMHoRDRZW5gvD5R9V7jC6/KOGN5fC+C7/tOQNo/fnvOEPo08M3mXuMFw+yhCWjHASK503/GF0+fxhdPkn7jC6/POGP4w+nm4Y/+UfKYz78o/8YfTmpyiM+/IPFMZLVRAQxo+YX1cRxk/6q0hh3KLCT+T/+AMRgRu5/okw2wAAAABJRU5ErkJggg==" />
)