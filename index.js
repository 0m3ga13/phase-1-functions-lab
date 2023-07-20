
 const distanceFromHqInBlocks = (numBlocks) => Math.abs(42-numBlocks)  ;
 const distanceFromHqInFeet = (numBlocks) => Math.abs(42-numBlocks)*264;
 const distanceTravelledInFeet = (block1, block2) => Math.abs(block2-block1) * 264;
 const calculatesFarePrice = (start, destination) =>
      distanceTravelledInFeet(start, destination) < 400 ? 0
    : distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000 ? (distanceTravelledInFeet(start, destination)-400)*0.02
    : distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500 ? 25
    : 'cannot travel that far';