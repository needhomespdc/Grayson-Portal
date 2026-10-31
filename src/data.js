export const transactions = [
  ['10/06/2024 3:30pm','TRX-000123','Fractional','Inflow',1030000.82,'Success'],
  ['10/06/2024 4:00pm','TRX-000124','Save to own','Inflow',120000000.82,'Success'],
  ['10/06/2024 4:30pm','TRX-000125','Land banking','Inflow',2500000,'Success'],
  ['10/06/2024 5:00pm','TRX-000126','Fund Release','Outflow',75000500.50,'Success'],
  ['10/06/2024 5:30pm','TRX-000127','Save to Own','Inflow',4200000.25,'Success'],
  ['10/06/2024 6:00pm','TRX-000128','Co-Dev','Inflow',9999999.99,'Success'],
  ['10/06/2024 6:30pm','TRX-000129','Portfolio Funds','Outflow',15450300.10,'Success'],
  ['10/06/2024 7:00pm','TRX-000130','Portfolio Investment','Outflow',520000.67,'Failed'],
  ['10/06/2024 7:30pm','TRX-000131','Fund Release','Outflow',33333333.33,'Success'],
  ['10/06/2024 8:00pm','TRX-000132','Land Banking','Inflow',7100100,'Success'],
].map(([date,id,purpose,type,amount,status])=>({date,id,purpose,type,amount,status}))

export const requests = [
  ['REQ-0012412','Payout',30000.82,'Pending'],['REQ-0012123','Project Financing',45500.10,'Pending'],
  ['REQ-0011222','Portfolio Investment',12750,'Pending'],['REQ-0011223','Exit',88999.99,'Approved'],
  ['REQ-0011224','Resale',5250.50,'Approved'],['REQ-0011212','Exit',67430.20,'Rejected'],
  ['REQ-0011226','Payout',23100,'Approved'],['REQ-0011227','Exit',14875.95,'Approved'],
  ['REQ-0011228','Payout',50000,'Rejected'],['REQ-0011229','Mutual Funds',39999.99,'Approved'],
].map(([id,purpose,amount,status])=>({date:'10/06/2024 15:30',id,purpose,amount,status}))

export const money = n => `₦${Number(n).toLocaleString('en-NG',{minimumFractionDigits:2,maximumFractionDigits:2})}`
