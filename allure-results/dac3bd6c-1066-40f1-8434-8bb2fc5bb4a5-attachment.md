# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> TC1 - Search for perfume for men on Flipkart
- Location: tests\example.spec.ts:19:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /search/
Received string:  "https://www.flipkart.com/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://www.flipkart.com/"

```

```yaml
- img "Image"
- img "Image"
- link "Image Image":
  - /url: /flights-travel-uhp-at-store
  - img "Image"
  - img "Image"
- img
- text: Location not set Select delivery location
- img
- banner:
  - button "Search for Products, Brands and More":
    - img "Search Icon"
  - textbox "Search for Products, Brands and More"
  - link "Login":
    - /url: /account/login?ret=/
    - img "Login"
    - text: Login
  - img "Chevron"
  - link "Login":
    - /url: /account/login?ret=/
  - link "More":
    - /url: "#"
  - img "Chevron"
  - link "Cart Cart":
    - /url: /viewcart?marketplace=FLIPKART
    - img "Cart"
    - text: Cart
- link "For You":
  - /url: https://www.flipkart.com/
  - img
  - text: For You
- link "Fashion":
  - /url: /ss-26-base-inline-at-store
  - img
  - text: Fashion
- link "Mobiles":
  - /url: /mobile-phones-store
  - img
  - text: Mobiles
- link "Electronics":
  - /url: /new-elec-clp-march-at-store
  - img
  - text: Electronics
- link "Beauty":
  - /url: /bpc-bau-new-inline-at-store
  - img
  - text: Beauty
- link "Home":
  - /url: /home-kitchen-25-at-store
  - img
  - text: Home
- link "Appliances":
  - /url: /tv-and-appliances-inline-ab-at-store
  - img
  - text: Appliances
- link "Toys, baby..":
  - /url: /toysbc-new26-inline-at-store
  - img
  - text: Toys, baby..
- link "Food & Health":
  - /url: /fnhc-2025-new-at-store
  - img
  - text: Food & Health
- link "Auto Accessories":
  - /url: /aa-2025-new-at-store
  - img
  - text: Auto Accessories
- link "Sports & Fitness":
  - /url: /sf-inline-2025-at-store
  - img
  - text: Sports & Fitness
- link "Furniture":
  - /url: /india-ka-furniture-studio-inlines-at-store
  - img
  - text: Furniture
- link "Books & Media":
  - /url: /booksmedia-2025-at-store
  - img
  - text: Books & Media
- link "2 Wheelers":
  - /url: /twowheelers-at-store
  - img
  - text: 2 Wheelers
- link "Image":
  - /url: /infinite-m3-at-store?param=38437439&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /mens-footwear/mens-slippers-flip-flops/pr?sid=osp%2Ccil%2Ce1r&fm=neo%2Fmerchandising&iid=M_8620794b-87fa-4e66-9eff-534828a75346_2_X1NCR146KC29_MC.DGNKX2JVJU8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=DGNKX2JVJU8J&p%5B%5D=facets.type%255B%255D%3DSlides&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D149&param=5678&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=JTTLR7NZYZ67_IAD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /home-decor/stickers-wallpapers/pr?sid=arb%2Cyod&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&param=0685&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=WKDG5Y2OY7S8_IAD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /televisions/~cs-ghemp1vvaa/pr?sid=ckf%2Cczl&collection-tab-name=TCL+T89D+TVs&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=OYQIAMRW9APL_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /televisions/~cs-p2wc7m4rli/pr?sid=ckf%2Cczl&collection-tab-name=Samsung+TVs&p%5B%5D=facets.screen_size%255B%255D%3D50%2B-%2B55%2Binch&p%5B%5D=facets.screen_size%255B%255D%3D60%2B-%2B65%2Binch&p%5B%5D=facets.screen_size%255B%255D%3D70%2B-%2B75%2Binch&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Z7AZKR28N14A_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /samsung-galaxy-z-fold8-ultra-5g-ads-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=NEI4S4L7CB2B_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /vivo-t5-lite-44w-5g-wave-blue-128-gb/p/itm5420c578ec2df?pid=MOBHNDTD5AWH5FJT&marketplace=FLIPKART&lid=LSTMOBHNDTD5AWH5FJTRKD4WK&pageUID=1784901989377&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ZOYJOLODZ3YE_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /acerpure-nitro-189-2-cm-75-inch-qled-ultra-hd-4k-smart-google-tv-120-hz-gtv-5-0-android-14-dolby-vision-dolby-atmos-40w-sound-tuner-wi-fi-direct-allm-vrr-memc-karaoke-ai-gaming-wall-mount/p/itmc25b156659d7c?pid=TVSHFNYYVUTK5UA5&lid=LSTTVSHFNYYVUTK5UA5J4SSZY&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=90TNRVWN0MBE_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /televisions/~cs-bmpiy93rky/pr?sid=ckf%2Cczl&collection-tab-name=TCL+A400M+New+Launch&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=D1RXQR1MRH7C_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /boltt-smartphone-coming-soon-ads-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=0A03OWB30GUG_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /audio-video/~cs-ajjtdy4eba/pr?sid=0pm&collection-tab-name=boAt+set3&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=TXKNA012MCC6_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /televisions/~cs-ghemp1vvaa/pr?sid=ckf%2Cczl&collection-tab-name=TCL+T89D+TVs&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MYL4JAQ2WS06_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /all/~cs-evmkg7i8fl/pr?sid=all&collection-tab-name=realme+Appliances&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=P46T1YWQ6FB2_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /televisions/~cs-008zihypih/pr?sid=ckf%2Cczl&collection-tab-name=Samsung+Mini-LED+TVs&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=0331AL1IGZ07_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /televisions/~cs-p2wc7m4rli/pr?sid=ckf%2Cczl&collection-tab-name=Samsung+TVs&p%5B%5D=facets.screen_size%255B%255D%3D50%2B-%2B55%2Binch&p%5B%5D=facets.screen_size%255B%255D%3D60%2B-%2B65%2Binch&p%5B%5D=facets.screen_size%255B%255D%3D70%2B-%2B75%2Binch&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=B5K5AAASJLQN_AD&BU=Mixed
  - img "Image"
- text: Add to your wishlist
- link "Image Grab Now Min. 70% Off":
  - /url: /all/~cs-52421d5e45fb7e6543367c89c83fc1df/pr?sid=clo%2Cqfl%2Cwp7%2Czpk&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDcwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJWRVNIWkJHS1dUVllYWUhVIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwiZGlzY291bnRfcmFuZ2VfdjEiOnsicmFuZ2VWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiZGlzY291bnRfcmFuZ2VfdjEiLCJpbmZlcmVuY2VUeXBlIjoiRkFDRVQiLCJtaW4iOjcwLjAsIm1heCI6bnVsbCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNZW4ncyBWZXN0cyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
  - img "Image"
  - text: Grab Now Min. 70% Off
- link "Image Top Picks Top Rated":
  - /url: /all/~cs-dc6cde05341d895c41012e092cd991a5/pr?sid=clo%2Cash%2Caxc%2Cmmk%2Ckp7&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTSFRITk42WktRWVNaVzRUIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
  - img "Image"
  - text: Top Picks Top Rated
- link "Image Most Loved From ₹6,999":
  - /url: /all/~cs-3c74b7c63475900191f152f61734c417/pr?sid=tyy&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTYsOTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwicHJpY2VfcmFuZ2UiOnsicmFuZ2VWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoicHJpY2VfcmFuZ2UiLCJpbmZlcmVuY2VUeXBlIjoiRkFDRVQiLCJtaW4iOjY5OTkuMCwibWF4IjpudWxsLCJ2YWx1ZVR5cGUiOiJSQU5HRV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6Ik1PQkhIVkZZQzNRVTNDQVEiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
  - img "Image"
  - text: Most Loved From ₹6,999
- link "Image Hand-picked Top Rated":
  - /url: /all/~cs-a1fadee9eb774e593600982361eceb92/pr?sid=tng%2C56a%2Cfq8%2Cgl8&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJSQ1RHWUg5RlJTWUhLMk1OIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
  - img "Image"
  - text: Hand-picked Top Rated
- link "Image":
  - /url: /flights-travel-uhp-at-store?param=Flights-Bookings-1299&BU=Mixed
  - img "Image"
- img "Image"
- text: Trending Gadgets & Appliances
- link:
  - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_1~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
  - img
- link "Image True Wireless Min. 50% Off":
  - /url: https://www.flipkart.com/all/~cs-6ef68bc8d283b86730515a8f2c87ff23/pr?sid=0pm,fcn,821,a7x,2si&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
  - img "Image"
  - text: True Wireless Min. 50% Off
- link "Image Smart Watches Min. 40% Off":
  - /url: https://www.flipkart.com/all/~cs-21e789349087c946d1b57cb0a6372ff1/pr?sid=ajy,buh&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
  - img "Image"
  - text: Smart Watches Min. 40% Off
- link "Image Neckband Min. 50% Off":
  - /url: https://www.flipkart.com/all/~cs-24370be17271c4e43aff0a751ba9e160/pr?sid=0pm,fcn,821,a7x,2rv&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
  - img "Image"
  - text: Neckband Min. 50% Off
- link "Image Mobile Speakers Trending":
  - /url: https://www.flipkart.com/all/~cs-bacfa40f92431ec57291097ce5888532/pr?sid=0pm,0o7,0it,sfd&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
  - img "Image"
  - text: Mobile Speakers Trending
- link "Image":
  - /url: /independence-day-sale-store?param=09873&BU=Mixed
  - img "Image"
- img "Image"
- text: Top Value Deals
- link "Image":
  - /url: /a/p/itme?pid=BDSHKNT8GNGCKV2S&experience=hv&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /beauty-and-grooming/makeup/~cs-ovxtagb5m9/pr?sid=g9b%2Cffi&sort=recency_desc&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D399&experience=hv&pageUID=1784559239890&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /all/~cs-uvfbzzuxpz/pr?sid=all&collection-tab-name=Non+Foods&BU=Mixed&experience=hv&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /digimore-d-1200-wl-wireless-pa-system-tours-classroom-bt-5-1-10hrs-backup-type-c-speaker-cabinets/p/itm597c64dbc5802?pid=MCAHAMFHVBYKQW3W&lid=LSTMCAHAMFHVBYKQW3WL1WCDO&marketplace=FLIPKART&store=ypu&srno=b_1_4&fm=organic&iid=1ea26f2f-2dee-45e0-a992-3a4846ef57ab.MCAHAMFHVBYKQW3W.SEARCH&ppt=browse&ppn=browse&ssid=qgc7t8o2jk0000001784728165773&ov_redirect=true&ov_redirect=true&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /a/p/itme?pid=CNTGMESQKQJ6ZFFX&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /a/p/itme?pid=OIDHJWG2JXNUHFDF&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /mens-footwear/~cs-hqdwko8cck/pr?sid=osp%2Ccil&collection-tab-name=Footwear-Menshoes&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D449&param=5678&offer=vl:05a8940617&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /a/p/itme?pid=CPRGCS64Q82RXQFH&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /product/p/itme?pid=WAPH8AGATJSZXXYG&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /beauty-and-grooming/fragrances/perfume/~cs-ovxtagb5m9/pr?sid=g9b%2C0yh%2Cjhz&sort=recency_desc&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D249&experience=hv&pageUID=1784559239890&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /all/~cs-7nzikjp79c/pr?sid=all&collection-tab-name=pantry+essentials&BU=Mixed&experience=hv&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /product/p/itme?pid=MIXHZGZAVHGZHM8G&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /womens-footwear/~cs-p34ujx9rfd/pr?sid=osp%2Ciko&collection-tab-name=Footwear-Womensandal&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D399&param=5678&offer=vl:05a8940617&BU=Mixed
  - img "Image"
- button:
  - img
- text: Brands in Spotlight
- link "Image":
  - /url: /samsung-galaxy-ring-ai-enabled-health-monitoring-sleep-coach-wireless-charging-smart-ring/p/itm00fed9a3fc870?pid=ACCHEYV9AGPDVCYR&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=V1ZS8HHREK3M_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /building-materials-and-supplies/electrical-hardware/wires-and-cables/polycab~brand/pr?sid=b8s%2Cprq%2C5wd&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DPolycab&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=O5S6UXLI5037_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: http://flipkart.com/clothing-and-accessories/pr?sid=clo&marketplace=FLIPKART&p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2Bmore&p%5B%5D=facets.brand%255B%255D%3DTHE%2BBEAR%2BHOUSE&p%5B%5D=facets.ideal_for%255B%255D%3DMen&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=FE79OH36SNNK_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /midea-563-l-frost-free-side-refrigerator/p/itma55f278b6a1fb?pid=RFRHBFSPZVBCPPUM&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=YPCWNUODZ5QR_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /beauty-and-grooming/~cs-6u9j7l1mcx/pr?sid=g9b&collection-tab-name=Head+and+Shoulder&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=1WHHAVGL2AZG_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /tcl-t6c-189-cm-75-inch-qled-ultra-hd-4k-smart-google-tv-hdr-10-dolby-vision-atmos-30w-120-hz-game-accelerator-dlg-metallic-bezel-less/p/itm4dc0ec2e64ecd?pid=TVSHAVHGVRBHBY9Q&lid=LSTTVSHAVHGVRBHBY9QLD84PK&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=TSSVOPB608UK_AD&BU=Mixed
  - img "Image"
- text: Hang on, loading content Flipkart - Your go-to place for Online Shopping +
- contentinfo:
  - text: ABOUT
  - link "Contact Us":
    - /url: /helpcentre?otracker=footer_navlinks
  - link "About Us":
    - /url: https://corporate.flipkart.net/corporate-home
  - link "Careers":
    - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
  - link "Flipkart Stories":
    - /url: http://stories.flipkart.com/?otracker=footer_navlinks
  - link "Press":
    - /url: http://stories.flipkart.com/category/top-stories/news/
  - link "Corporate Information":
    - /url: /corporate-information
  - text: GROUP COMPANIES
  - link "Myntra":
    - /url: https://www.myntra.com/
  - link "Cleartrip":
    - /url: https://www.cleartrip.com/
  - link "Shopsy":
    - /url: https://www.shopsy.in
  - text: HELP
  - link "Payments":
    - /url: /pages/payments
  - link "Shipping":
    - /url: /pages/shipping
  - link "Cancellation & Returns":
    - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
  - link "FAQ":
    - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
  - text: CONSUMER POLICY
  - link "Cancellation & Returns":
    - /url: /pages/returnpolicy?otracker=footer_navlinks
  - link "Terms Of Use":
    - /url: /pages/terms?otracker=footer_navlinks
  - link "Security":
    - /url: /pages/paymentsecurity?otracker=footer_navlinks
  - link "Privacy":
    - /url: /pages/privacypolicy?otracker=footer_navlinks
  - link "Sitemap":
    - /url: /sitemap?otracker=footer_navlinks
  - link "Grievance Redressal":
    - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
  - link "EPR Compliance":
    - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
  - link "FSSAI Food Safety Connect App":
    - /url: https://fssai.gov.in/cms/food-safety-connect.php
  - text: "Mail Us:"
  - paragraph: Flipkart Internet Private Limited,
  - paragraph: Buildings Alyssa, Begonia &
  - paragraph: Clove Embassy Tech Village,
  - paragraph: Outer Ring Road, Devarabeesanahalli Village,
  - paragraph: Bengaluru, 560103,
  - paragraph: Karnataka, India
  - text: "Social:"
  - link "Facebook":
    - /url: https://www.facebook.com/flipkart
    - img "Facebook"
  - link "Twitter":
    - /url: https://www.twitter.com/flipkart
    - img "Twitter"
  - link "YouTube":
    - /url: https://www.youtube.com/flipkart
    - img "YouTube"
  - link "Instagram":
    - /url: https://www.instagram.com/flipkart
    - img "Instagram"
  - text: "Registered Office Address:"
  - paragraph: Flipkart Internet Private Limited,
  - paragraph: Buildings Alyssa, Begonia &
  - paragraph: Clove Embassy Tech Village,
  - paragraph: Outer Ring Road, Devarabeesanahalli Village,
  - paragraph: Bengaluru, 560103,
  - paragraph: Karnataka, India
  - paragraph: "CIN : U51109KA2012PTC066107"
  - paragraph
  - paragraph:
    - text: "Telephone:"
    - link "044-45614700":
      - /url: tel:044-45614700
    - text: /
    - link "044-67415800":
      - /url: tel:044-67415800
  - img "Become a Seller"
  - link "Become a Seller":
    - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
  - img "Advertise"
  - text: Advertise
  - img "Gift Cards"
  - link "Gift Cards":
    - /url: /the-gift-card-store?otracker=footer_navlinks
  - img "Help Center"
  - link "Help Center":
    - /url: /helpcentre?otracker=footer_navlinks
  - text: © 2007-2026 Flipkart.com
  - img "Payment methods"
- contentinfo
```

# Test source

```ts
  1  | import { test, expect, type Page } from '@playwright/test';
  2  | 
  3  | async function openFlipkartAndSearch(page: Page, searchText: string) {
  4  |   await page.goto('https://www.flipkart.com/', { waitUntil: 'domcontentloaded' });
  5  | 
  6  |   const closePopupButton = page.getByRole('button', { name: /close|✕/ }).first();
  7  |   if (await closePopupButton.isVisible().catch(() => false)) {
  8  |     await closePopupButton.click();
  9  |   }
  10 | 
  11 |   const searchInput = page.getByRole('textbox', { name: /Search for Products, Brands/i }).first();
  12 |   await searchInput.waitFor({ state: 'visible', timeout: 10000 });
  13 |   await searchInput.fill(searchText);
  14 |   await page.locator('button[type="submit"]').first().click();
  15 | 
  16 |   await page.waitForLoadState('networkidle');
  17 | }
  18 | 
  19 | test('TC1 - Search for perfume for men on Flipkart', async ({ page }) => {
  20 |   // Explanation: This test opens the Flipkart website, finds the search box, enters the text "perfume for men", and submits the search.
  21 |   await openFlipkartAndSearch(page, 'perfume for men');
  22 | 
> 23 |   await expect(page).toHaveURL(/search/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  24 | });
  25 | 
  26 | test('TC2 - Verify the search term appears on the results page', async ({ page }) => {
  27 |   // Explanation: This test confirms that the search query was accepted and the results page loads with the same search text.
  28 |   await openFlipkartAndSearch(page, 'perfume for men');
  29 | 
  30 |   const searchInput = page.locator('input[title="Search for Products, Brands and More"]');
  31 |   await expect(searchInput).toHaveValue('perfume for men');
  32 |   await expect(page).toHaveURL(/search/);
  33 | });
  34 | 
  35 | 
  36 | 
```