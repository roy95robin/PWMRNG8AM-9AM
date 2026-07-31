# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardPageTest.spec.ts >> view the product
- Location: tests\dashboardPageTest.spec.ts:26:5

# Error details

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e29]:
    - link "Continue Shopping❯" [ref=e30] [cursor=pointer]:
      - /url: "#/dashboard"
    - generic [ref=e31]:
      - heading "ADIDAS ORIGINAL" [level=2] [ref=e32]
      - heading "$ 11500" [level=3] [ref=e33]
      - button "Add to Cart" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - heading "product details" [level=6] [ref=e37]
        - paragraph [ref=e38]: Apple phone
      - generic [ref=e39]:
        - heading "Share It" [level=6] [ref=e40]
        - list [ref=e42]:
          - listitem [ref=e43]:
            - generic [ref=e45]: 
          - listitem [ref=e46]:
            - generic [ref=e48]: 
          - listitem [ref=e49]:
            - generic [ref=e51]: 
          - listitem [ref=e52]:
            - generic [ref=e54]: 
          - listitem [ref=e55]:
            - generic [ref=e57]: 
```