# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> TC2 - Verify the search term appears on the results page
- Location: tests\example.spec.ts:25:5

# Error details

```
Error: locator.fill: Error: strict mode violation: locator('input[title="Search for Products, Brands and More"]') resolved to 2 elements:
    1) <input name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn25" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/> aka getByRole('textbox', { name: 'Search for Products, Brands' })
    2) <input readonly name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn25" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/> aka locator('a').filter({ hasText: 'Search Icon' }).getByPlaceholder('Search for Products, Brands')

Call log:
  - waiting for locator('input[title="Search for Products, Brands and More"]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link "Image Image" [ref=e37] [cursor=pointer]:
            - /url: /flights-travel-uhp-at-store
            - img "Image" [ref=e40]
            - img "Image" [ref=e43]
        - generic [ref=e53]:
          - generic [ref=e54]:
            - img [ref=e55]
            - generic [ref=e58]: Location not set
          - generic [ref=e60]:
            - generic [ref=e61]: Select delivery location
            - img [ref=e62]
      - banner [ref=e70]:
        - generic [ref=e74]:
          - button "Search for Products, Brands and More" [ref=e75] [cursor=pointer]:
            - img "Search Icon" [ref=e76]
          - textbox "Search for Products, Brands and More" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e84]:
            - generic [ref=e86]:
              - link "Login" [ref=e87] [cursor=pointer]:
                - /url: /account/login?ret=/
                - img "Login" [ref=e88]
                - generic [ref=e89]: Login
              - img "Chevron" [ref=e90]
            - link "Login" [ref=e94] [cursor=pointer]:
              - /url: /account/login?ret=/
          - generic [ref=e99]:
            - link "More" [ref=e100] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e101]: More
            - img "Chevron" [ref=e102]
          - link "Cart Cart" [ref=e105] [cursor=pointer]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e106]
            - generic [ref=e107]: Cart
      - generic [ref=e109]:
        - link "For You" [ref=e114] [cursor=pointer]:
          - /url: https://www.flipkart.com/
          - generic [ref=e116]:
            - img [ref=e119]
            - generic [ref=e120]: For You
        - link "Fashion" [ref=e125] [cursor=pointer]:
          - /url: /ss-26-base-inline-at-store
          - generic [ref=e127]:
            - img [ref=e130]
            - generic [ref=e131]: Fashion
        - link "Mobiles" [ref=e136] [cursor=pointer]:
          - /url: /mobile-phones-store
          - generic [ref=e138]:
            - img [ref=e141]
            - generic [ref=e142]: Mobiles
        - link "Electronics" [ref=e147] [cursor=pointer]:
          - /url: /new-elec-clp-march-at-store
          - generic [ref=e149]:
            - img [ref=e152]
            - generic [ref=e153]: Electronics
        - link "Beauty" [ref=e158] [cursor=pointer]:
          - /url: /bpc-bau-new-inline-at-store
          - generic [ref=e160]:
            - img [ref=e163]
            - generic [ref=e164]: Beauty
        - link "Home" [ref=e169] [cursor=pointer]:
          - /url: /home-kitchen-25-at-store
          - generic [ref=e171]:
            - img [ref=e174]
            - generic [ref=e175]: Home
        - link "Appliances" [ref=e180] [cursor=pointer]:
          - /url: /tv-and-appliances-inline-ab-at-store
          - generic [ref=e182]:
            - img [ref=e185]
            - generic [ref=e186]: Appliances
        - link "Toys, baby.." [ref=e191] [cursor=pointer]:
          - /url: /toysbc-new26-inline-at-store
          - generic [ref=e193]:
            - img [ref=e196]
            - generic [ref=e197]: Toys, baby..
        - link "Food & Health" [ref=e202] [cursor=pointer]:
          - /url: /fnhc-2025-new-at-store
          - generic [ref=e204]:
            - img [ref=e207]
            - generic [ref=e208]: Food & Health
        - link "Auto Accessories" [ref=e213] [cursor=pointer]:
          - /url: /aa-2025-new-at-store
          - generic [ref=e215]:
            - img [ref=e218]
            - generic [ref=e219]: Auto Accessories
        - link "Sports & Fitness" [ref=e224] [cursor=pointer]:
          - /url: /sf-inline-2025-at-store
          - generic [ref=e226]:
            - img [ref=e229]
            - generic [ref=e230]: Sports & Fitness
        - link "Furniture" [ref=e235] [cursor=pointer]:
          - /url: /india-ka-furniture-studio-inlines-at-store
          - generic [ref=e237]:
            - img [ref=e240]
            - generic [ref=e241]: Furniture
        - link "Books & Media" [ref=e246] [cursor=pointer]:
          - /url: /booksmedia-2025-at-store
          - generic [ref=e248]:
            - img [ref=e251]
            - generic [ref=e252]: Books & Media
        - link "2 Wheelers" [ref=e257] [cursor=pointer]:
          - /url: /twowheelers-at-store
          - generic [ref=e259]:
            - img [ref=e262]
            - generic [ref=e263]: 2 Wheelers
    - generic [ref=e271]:
      - link "Image" [ref=e284] [cursor=pointer]:
        - /url: /infinite-m3-at-store?param=38437439&BU=Mixed
        - img "Image" [ref=e287]
      - generic [ref=e302]:
        - link "Image" [ref=e309] [cursor=pointer]:
          - /url: /mens-footwear/mens-slippers-flip-flops/pr?sid=osp%2Ccil%2Ce1r&fm=neo%2Fmerchandising&iid=M_8620794b-87fa-4e66-9eff-534828a75346_2_X1NCR146KC29_MC.DGNKX2JVJU8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L2_view-all&cid=DGNKX2JVJU8J&p%5B%5D=facets.type%255B%255D%3DSlides&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D149&param=5678&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=JTTLR7NZYZ67_IAD&BU=Mixed
          - img "Image" [ref=e312]
        - link "Image" [ref=e319] [cursor=pointer]:
          - /url: /home-decor/stickers-wallpapers/pr?sid=arb%2Cyod&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&param=0685&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=WKDG5Y2OY7S8_IAD&BU=Mixed
          - img "Image" [ref=e322]
        - link "Image" [ref=e329] [cursor=pointer]:
          - /url: /televisions/~cs-bmpiy93rky/pr?sid=ckf%2Cczl&collection-tab-name=TCL+A400M+New+Launch&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=54JT3PWAXAHU_AD&BU=Mixed
          - img "Image" [ref=e332]
        - link "Image" [ref=e339] [cursor=pointer]:
          - /url: /all/~cs-evmkg7i8fl/pr?sid=all&collection-tab-name=realme+Appliances&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=20RS94V1BR59_AD&BU=Mixed
          - img "Image" [ref=e342]
        - link "Image" [ref=e349] [cursor=pointer]:
          - /url: /samsung-galaxy-z-fold8-ultra-5g-ads-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=NEI4S4L7CB2B_AD&BU=Mixed
          - img "Image" [ref=e352]
        - link "Image" [ref=e359] [cursor=pointer]:
          - /url: /vivo-t5-lite-44w-5g-wave-blue-128-gb/p/itm5420c578ec2df?pid=MOBHNDTD5AWH5FJT&marketplace=FLIPKART&lid=LSTMOBHNDTD5AWH5FJTRKD4WK&pageUID=1784901989377&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ZOYJOLODZ3YE_AD&BU=Mixed
          - img "Image" [ref=e362]
        - link "Image" [ref=e369] [cursor=pointer]:
          - /url: /acerpure-nitro-108-cm-43-inch-qled-ultra-hd-4k-smart-google-tv-120-hz-gtv-5-0-android-14-dolby-vision-dolby-atmos-40w-sound-tuner-wi-fi-direct-allm-vrr-memc-karaoke-ai-gaming-wall-mount/p/itmca68400c27b94?pid=TVSHEQG2EGZZGH9Y&lid=LSTTVSHEQG2EGZZGH9YIJ6TID&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=K1UTNBAEST0Q_AD&BU=Mixed
          - img "Image" [ref=e372]
        - link "Image" [ref=e379] [cursor=pointer]:
          - /url: /televisions/~cs-p2wc7m4rli/pr?sid=ckf%2Cczl&collection-tab-name=Samsung+TVs&p%5B%5D=facets.screen_size%255B%255D%3D50%2B-%2B55%2Binch&p%5B%5D=facets.screen_size%255B%255D%3D60%2B-%2B65%2Binch&p%5B%5D=facets.screen_size%255B%255D%3D70%2B-%2B75%2Binch&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Z7AZKR28N14A_AD&BU=Mixed
          - img "Image" [ref=e382]
        - link "Image" [ref=e389] [cursor=pointer]:
          - /url: /boltt-smartphone-coming-soon-ads-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=0A03OWB30GUG_AD&BU=Mixed
          - img "Image" [ref=e392]
        - link "Image" [ref=e399] [cursor=pointer]:
          - /url: /audio-video/~cs-ajjtdy4eba/pr?sid=0pm&collection-tab-name=boAt+set3&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=TXKNA012MCC6_AD&BU=Mixed
          - img "Image" [ref=e402]
      - generic [ref=e426]:
        - generic [ref=e427]:
          - link "Image" [ref=e432] [cursor=pointer]:
            - /url: /televisions/~cs-ghemp1vvaa/pr?sid=ckf%2Cczl&collection-tab-name=TCL+T89D+TVs&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MYL4JAQ2WS06_AD&BU=Mixed
            - img "Image" [ref=e435]
          - link "Image" [ref=e440] [cursor=pointer]:
            - /url: /refrigerators/~cs-a5dzuehav5/pr?sid=j9e%2Cabm%2Chzg&collection-tab-name=LG+-+ref&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=VMGVXOOQJ56W_AD&BU=Mixed
            - img "Image" [ref=e443]
          - link "Image" [ref=e448] [cursor=pointer]:
            - /url: /all/~cs-evmkg7i8fl/pr?sid=all&collection-tab-name=realme+Appliances&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=P46T1YWQ6FB2_AD&BU=Mixed
            - img "Image" [ref=e451]
          - link "Image" [ref=e456] [cursor=pointer]:
            - /url: /televisions/~cs-008zihypih/pr?sid=ckf%2Cczl&collection-tab-name=Samsung+Mini-LED+TVs&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=0331AL1IGZ07_AD&BU=Mixed
            - img "Image" [ref=e459]
          - link "Image" [ref=e464] [cursor=pointer]:
            - /url: /televisions/~cs-p2wc7m4rli/pr?sid=ckf%2Cczl&collection-tab-name=Samsung+TVs&p%5B%5D=facets.screen_size%255B%255D%3D50%2B-%2B55%2Binch&p%5B%5D=facets.screen_size%255B%255D%3D60%2B-%2B65%2Binch&p%5B%5D=facets.screen_size%255B%255D%3D70%2B-%2B75%2Binch&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=B5K5AAASJLQN_AD&BU=Mixed
            - img "Image" [ref=e467]
        - button [ref=e468]:
          - img [ref=e469]
      - generic [ref=e480]:
        - generic [ref=e487]: On everybody's list
        - generic [ref=e490]:
          - link "Image Don't Miss From ₹24,999" [ref=e495] [cursor=pointer]:
            - /url: /all/~cs-a0671f0115206ea1f0d0c9ea4fcd260c/pr?sid=tyy%2C4io&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTI0LDk5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sInByaWNlX3JhbmdlIjp7InJhbmdlVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InByaWNlX3JhbmdlIiwiaW5mZXJlbmNlVHlwZSI6IkZBQ0VUIiwibWluIjoyNDk5OS4wLCJtYXgiOm51bGwsInZhbHVlVHlwZSI6IlJBTkdFX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiTU9CSDhLOFVBOVpIWVlYRyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk1vYmlsZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e505]
            - generic [ref=e508]:
              - generic [ref=e509]: Don't Miss
              - generic [ref=e510]: From ₹24,999
          - link "Image New Collection Under ₹9,999" [ref=e515] [cursor=pointer]:
            - /url: /all/~cs-901f5f196e7389f08f2b5c2d082bb8b8/pr?sid=tyy%2Chry&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrk5LDk5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sInByaWNlX3JhbmdlIjp7InJhbmdlVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InByaWNlX3JhbmdlIiwiaW5mZXJlbmNlVHlwZSI6IkZBQ0VUIiwibWluIjpudWxsLCJtYXgiOjk5OTkuMCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJNT0JIUDNaUFdGU0ZQR0dTIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiVGFibGV0cyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e525]
            - generic [ref=e528]:
              - generic [ref=e529]: New Collection
              - generic [ref=e530]: Under ₹9,999
          - link "Image Top Collection Special offer" [ref=e535] [cursor=pointer]:
            - /url: /all/~cs-b2fe2c961f5abf84f6ec6fdc763e212b/pr?sid=tng%2C56a%2Cfq8%2Cgl8&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTcGVjaWFsIG9mZmVyIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiUmVtb3RlIENvbnRyb2wgVG95IFZlaGljbGVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiUkNUSEM3RzNHWkdZUU1OVSIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e545]
            - generic [ref=e548]:
              - generic [ref=e549]: Top Collection
              - generic [ref=e550]: Special offer
          - link "Image Don't Miss Special offer" [ref=e555] [cursor=pointer]:
            - /url: /all/~cs-fc4dd4a89c1100a3fe1b7dc073b2c393/pr?sid=clo%2Ccfv%2Citg%2Cpme&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTcGVjaWFsIG9mZmVyIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiTWVuJ3MgRXRobmljIFNldHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJFVEhHWDkzOTlES01HV0hZIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e565]
            - generic [ref=e568]:
              - generic [ref=e569]: Don't Miss
              - generic [ref=e570]: Special offer
      - link "Image" [ref=e581] [cursor=pointer]:
        - /url: /flights-travel-uhp-at-store?param=Flights-Bookings-1299&BU=Mixed
        - img "Image" [ref=e587]
      - generic [ref=e597]:
        - generic [ref=e604]: Trends you may like
        - generic [ref=e607]:
          - link "Image Ruffles" [ref=e613] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-dd94fb495e672835d04ad940bdb92e87/pr?sid=clo,odx,maj,zc1&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e614]:
              - img "Image" [ref=e622]
              - generic [ref=e628]: Ruffles
          - link "Image WideLeg" [ref=e634] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-40aa28b40e6096f3a6b320c3d6a8cd92/pr?sid=clo,vua,k58,4hp&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e635]:
              - img "Image" [ref=e643]
              - generic [ref=e649]: WideLeg
          - link "Image Minimalist Decor" [ref=e655] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-1af96e9c4329222d66a7c702b68e57a8/pr?sid=arb&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e656]:
              - img "Image" [ref=e664]
              - generic [ref=e670]: Minimalist Decor
          - link "Image SquareDial" [ref=e676] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-73265fa18a19e452add8c42df1c1324b/pr?sid=r18,f13&marketplace=FLIPKART&BU=Mixed
            - generic [ref=e677]:
              - img "Image" [ref=e685]
              - generic [ref=e691]: SquareDial
      - link "Image" [ref=e702] [cursor=pointer]:
        - /url: /independence-day-sale-store?param=09873&BU=Mixed
        - img "Image" [ref=e708]
      - generic [ref=e718]:
        - generic [ref=e722]:
          - img "Image" [ref=e725]
          - generic [ref=e729]: Top Value Deals
        - generic [ref=e734]:
          - generic [ref=e735]:
            - link "Image" [ref=e741] [cursor=pointer]:
              - /url: /mens-footwear/~cs-hqdwko8cck/pr?sid=osp%2Ccil&collection-tab-name=Footwear-Menshoes&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D449&param=5678&offer=vl:05a8940617&BU=Mixed
              - img "Image" [ref=e750]
            - link "Image" [ref=e756] [cursor=pointer]:
              - /url: /product/p/item?pid=ACCGRFYJWCBYH76H&experience=hv&BU=Mixed
              - img "Image" [ref=e765]
            - link "Image" [ref=e771] [cursor=pointer]:
              - /url: /all/~cs-1mwm5b614o/pr?sid=all&collection-tab-name=Limited+stock+deals+value+365+ph2&experience=hv&param=90876587098&BU=Mixed
              - img "Image" [ref=e780]
            - link "Image" [ref=e786] [cursor=pointer]:
              - /url: /product/p/itme?pid=ICTDZZM3SKDMH5CK&BU=Mixed
              - img "Image" [ref=e795]
            - link "Image" [ref=e801] [cursor=pointer]:
              - /url: /product/p/item?pid=RSFGUZJ8KUPPDBQE&param=88727&BU=Mixed
              - img "Image" [ref=e810]
            - link "Image" [ref=e816] [cursor=pointer]:
              - /url: /a/p/itme?pid=BOTGS24HSZZA42VM&BU=Mixed
              - img "Image" [ref=e825]
            - link "Image" [ref=e831] [cursor=pointer]:
              - /url: /watches/wrist-watches/pr?sid=r18%2Cf13&sort=popularity&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D199&offer=vl:05a8940617&BU=Mixed
              - img "Image" [ref=e840]
            - link "Image" [ref=e846] [cursor=pointer]:
              - /url: /beauty-and-grooming/body-face-skin-care/body-and-face-care/~cs-g6epjrsokf/pr?sid=g9b%2Cema%2C5la&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&sort=recency_desc&experience=hv&pageUID=1784559239890&BU=Mixed
              - img "Image" [ref=e855]
            - link "Image" [ref=e861] [cursor=pointer]:
              - /url: /product/p/itme?pid=WAPHMGNKB6T9FSZH&BU=Mixed
              - img "Image" [ref=e870]
            - link "Image" [ref=e876] [cursor=pointer]:
              - /url: /product/p/itme?pid=IRNH3Z5UCKTEWWN7&BU=Mixed
              - img "Image" [ref=e885]
            - link "Image" [ref=e891] [cursor=pointer]:
              - /url: /product/p/item?pid=RTRG7W568RUGBYXE&experience=hv&BU=Mixed
              - img "Image" [ref=e900]
            - link "Image" [ref=e906] [cursor=pointer]:
              - /url: /mens-footwear/~cs-lfadb6mdss/pr?sid=osp%2Ccil&collection-tab-name=Footwear-Menslippers&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D399&param=5678&offer=vl:05a8940617&BU=Mixed
              - img "Image" [ref=e915]
            - link "Image" [ref=e921] [cursor=pointer]:
              - /url: /all/~cs-2sp40njj39/pr?sid=all&collection-tab-name=Down+Deals&BU=Mixed&experience=hv&BU=Mixed
              - img "Image" [ref=e930]
            - link "Image" [ref=e936] [cursor=pointer]:
              - /url: /product/p/item?pid=RSFHMHDZYCBVNCHM&param=29374&BU=Mixed
              - img "Image" [ref=e945]
            - link "Image" [ref=e951] [cursor=pointer]:
              - /url: /product/p/item?pid=PHFHFGWVZTVU2GHE&PARAM=2134&BU=Mixed
              - img "Image" [ref=e960]
          - button [ref=e961]:
            - img [ref=e962]
      - generic [ref=e973]:
        - generic [ref=e977]: Brands in Spotlight
        - generic [ref=e979]:
          - link "Image" [ref=e984] [cursor=pointer]:
            - /url: /samsung-galaxy-ring-ai-enabled-health-monitoring-sleep-coach-wireless-charging-smart-ring/p/itm00fed9a3fc870?pid=ACCHEYV9Q6QSQ9VF&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=XGTKUTRGW6TD_AD&BU=Mixed
            - img "Image" [ref=e987]
          - link "Image" [ref=e992] [cursor=pointer]:
            - /url: /building-materials-and-supplies/electrical-hardware/wires-and-cables/polycab~brand/pr?sid=b8s%2Cprq%2C5wd&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DPolycab&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=O5S6UXLI5037_AD&BU=Mixed
            - img "Image" [ref=e995]
          - link "Image" [ref=e1000] [cursor=pointer]:
            - /url: http://flipkart.com/footwear/mens-footwear/pr?sid=osp%2Ccil&p%5B%5D=facets.brand%255B%255D%3DAbros&p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2Bmore&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=4P8FY802RSMQ_AD&BU=Mixed
            - img "Image" [ref=e1003]
      - generic [ref=e1015]:
        - link "Image" [ref=e1020] [cursor=pointer]:
          - /url: /midea-8-kg-fully-automatic-top-load-washing-machine-in-built-heater-black/p/itmc67a25ee08b1e?pid=WMNHMPFFHWQV26EH&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=JSDC2ADFXZ7K_AD&BU=Mixed
          - img "Image" [ref=e1023]
        - link "Image" [ref=e1028] [cursor=pointer]:
          - /url: /beauty-and-grooming/~cs-6u9j7l1mcx/pr?sid=g9b&collection-tab-name=Head+and+Shoulder&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=1WHHAVGL2AZG_AD&BU=Mixed
          - img "Image" [ref=e1031]
        - link "Image" [ref=e1036] [cursor=pointer]:
          - /url: /tcl-t6c-189-cm-75-inch-qled-ultra-hd-4k-smart-google-tv-hdr-10-dolby-vision-atmos-30w-120-hz-game-accelerator-dlg-metallic-bezel-less/p/itm4dc0ec2e64ecd?pid=TVSHAVHGVRBHBY9Q&lid=LSTTVSHAVHGVRBHBY9QLD84PK&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=TSSVOPB608UK_AD&BU=Mixed
          - img "Image" [ref=e1039]
      - generic [ref=e1043]: Hang on, loading content
      - generic [ref=e1055]:
        - generic [ref=e1056]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1057]: +
      - contentinfo [ref=e1058]:
        - generic [ref=e1060]:
          - generic [ref=e1061]:
            - generic [ref=e1062]:
              - generic [ref=e1063]: ABOUT
              - link "Contact Us" [ref=e1064] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1065] [cursor=pointer]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1066] [cursor=pointer]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1067] [cursor=pointer]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1068] [cursor=pointer]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1069] [cursor=pointer]:
                - /url: /corporate-information
            - generic [ref=e1070]:
              - generic [ref=e1071]: GROUP COMPANIES
              - link "Myntra" [ref=e1072] [cursor=pointer]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1073] [cursor=pointer]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1074] [cursor=pointer]:
                - /url: https://www.shopsy.in
            - generic [ref=e1075]:
              - generic [ref=e1076]: HELP
              - link "Payments" [ref=e1077] [cursor=pointer]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1078] [cursor=pointer]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1079] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1080] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1081]:
              - generic [ref=e1082]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1083] [cursor=pointer]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1084] [cursor=pointer]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1085] [cursor=pointer]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1086] [cursor=pointer]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1087] [cursor=pointer]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1088] [cursor=pointer]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1089] [cursor=pointer]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1090] [cursor=pointer]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1091]:
              - generic [ref=e1092]: "Mail Us:"
              - generic [ref=e1093]:
                - paragraph [ref=e1094]: Flipkart Internet Private Limited,
                - paragraph [ref=e1095]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1096]: Clove Embassy Tech Village,
                - paragraph [ref=e1097]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1098]: Bengaluru, 560103,
                - paragraph [ref=e1099]: Karnataka, India
              - generic [ref=e1100]: "Social:"
              - generic [ref=e1101]:
                - link "Facebook" [ref=e1103] [cursor=pointer]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1104]
                - link "Twitter" [ref=e1106] [cursor=pointer]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1107]
                - link "YouTube" [ref=e1109] [cursor=pointer]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1110]
                - link "Instagram" [ref=e1112] [cursor=pointer]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1113]
            - generic [ref=e1114]:
              - generic [ref=e1115]: "Registered Office Address:"
              - generic [ref=e1116]:
                - paragraph [ref=e1117]: Flipkart Internet Private Limited,
                - paragraph [ref=e1118]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1119]: Clove Embassy Tech Village,
                - paragraph [ref=e1120]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1121]: Bengaluru, 560103,
                - paragraph [ref=e1122]: Karnataka, India
                - paragraph [ref=e1123]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1124]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1125] [cursor=pointer]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1126] [cursor=pointer]:
                    - /url: tel:044-67415800
          - generic [ref=e1127]:
            - generic [ref=e1128]:
              - img "Become a Seller" [ref=e1129]
              - link "Become a Seller" [ref=e1130] [cursor=pointer]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1131]:
              - img "Advertise" [ref=e1132]
              - generic "Advertise" [ref=e1133]
            - generic [ref=e1134]:
              - img "Gift Cards" [ref=e1135]
              - link "Gift Cards" [ref=e1136] [cursor=pointer]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1137]:
              - img "Help Center" [ref=e1138]
              - link "Help Center" [ref=e1139] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1140]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
  - generic [ref=e1142]:
    - button "✕" [ref=e1143] [cursor=pointer]
    - generic [ref=e1145]:
      - generic [ref=e1146]:
        - text: Login
        - paragraph [ref=e1147]: Get access to your Orders, Wishlist and Recommendations
      - generic [ref=e1150]:
        - generic [ref=e1151]:
          - textbox [active] [ref=e1152]
          - generic: Enter Email/Mobile number
        - generic [ref=e1153]:
          - text: By continuing, you agree to Flipkart's
          - link "Terms of Use" [ref=e1154] [cursor=pointer]:
            - /url: /pages/terms
          - text: and
          - link "Privacy Policy" [ref=e1155] [cursor=pointer]:
            - /url: /pages/privacypolicy
          - text: .
        - button "Request OTP" [ref=e1157] [cursor=pointer]
        - link "New to Flipkart? Create an account" [ref=e1159] [cursor=pointer]:
          - /url: /account/login?signup=true
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | async function openFlipkartAndSearch(page: any, searchText: string) {
  4  |   await page.goto('https://www.flipkart.com/', { waitUntil: 'domcontentloaded' });
  5  | 
  6  |   const closePopupButton = page.getByRole('button', { name: /close|✕/ }).first();
  7  |   if (await closePopupButton.isVisible().catch(() => false)) {
  8  |     await closePopupButton.click();
  9  |   }
  10 | 
  11 |   const searchInput = page.locator('input[title="Search for Products, Brands and More"]');
> 12 |   await searchInput.fill(searchText);
     |                     ^ Error: locator.fill: Error: strict mode violation: locator('input[title="Search for Products, Brands and More"]') resolved to 2 elements:
  13 |   await page.locator('button[type="submit"]').click();
  14 | 
  15 |   await page.waitForLoadState('domcontentloaded');
  16 | }
  17 | 
  18 | test('TC1 - Search for perfume for men on Flipkart', async ({ page }) => {
  19 |   // Explanation: This test opens the Flipkart website, finds the search box, enters the text "perfume for men", and submits the search.
  20 |   await openFlipkartAndSearch(page, 'perfume for men');
  21 | 
  22 |   await expect(page).toHaveURL(/search/);
  23 | });
  24 | 
  25 | test('TC2 - Verify the search term appears on the results page', async ({ page }) => {
  26 |   // Explanation: This test confirms that the search query was accepted and the results page loads with the same search text.
  27 |   await openFlipkartAndSearch(page, 'perfume for men');
  28 | 
  29 |   const searchInput = page.locator('input[title="Search for Products, Brands and More"]');
  30 |   await expect(searchInput).toHaveValue('perfume for men');
  31 |   await expect(page).toHaveURL(/search/);
  32 | });
  33 | 
  34 | 
  35 | 
```