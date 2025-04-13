import puppeteer from 'puppeteer';
// import cheerio from 'cheerio';

const cheerio = require('cheerio');

const item = "milk"; //CHANGE THIS

async function scrape() {

// //   // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless:false, slowMo:1000});
  const page = await browser.newPage();
  

// //   // Navigate the page to a URL
  const url = 'https://www.instacart.com/store/s?k=' + item;
  await page.goto(url, {waitUntil: 'domcontentloaded'});

// //   // Set screen size
  await page.setViewport({width: 1080, height: 1024});
  const data = await page.content();
  await browser.close();
  return data;

//     console.log(data.match(/(\$[0-9]+\.[0-9]+)/g));
//       await page.evaluate(() => {
//     window.scrollTo(0, 3000);
//   });
//   const data2 = await page.content();
//     console.log(data2.match(/(\$[0-9]+\.[0-9]+)/g));
// //   // Type into search box
// // //   await page.type('.devsite-search-field', 'automate beyond recorder');

// //   // Wait and click on first result
// //   const searchResultSelector = '.e-ecdxmw';
// //   await page.waitForSelector(searchResultSelector);
// //   console.log("meow");
// //   await page.click(searchResultSelector);
// //     console.log("mewmew")
// //   const textSelector = await page.waitForSelector('.e-jln0k3 > .e-0');
// // //   // Locate the full title with a unique string


// //   console.log("teststy");
// //   // Check if network is idle after scrolling
// // //   await page.waitForNetworkIdle();
// // //   console.log("testsssst");
// //   const textSelector = await page.waitForSelector(
// //     '.e-8n9yrs'
// //   );
// //   console.log("testst")  
// //   const price = await textSelector?.evaluate(el => el.textContent);
// //   console.log(price);

// // //   // Print the full title
// // //   console.log('Price is".', price);


// })();
}

scrape().then((data) => {
  let arr = []
  let $ = cheerio.load(data);
  console.log($('li.e-14qbqkc').find('span.e-6gqwm0').text().trim());

})