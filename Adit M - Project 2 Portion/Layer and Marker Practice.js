// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
//Establish polygon, housing and heatmap Coordinates
var Alexandria = [
  [38.810357, -77.144359],
  [38.811136, -77.14375],
  [38.813204, -77.143691],
  [38.814939, -77.143215],
  [38.817476, -77.140887],
  [38.81874, -77.138411],
  [38.819474, -77.139424],
  [38.821207, -77.137552], 
  [38.825956, -77.141656],
  [38.827806, -77.13957],
  [38.8321, -77.135254],
  [38.837578, -77.124805],
  [38.839358, -77.125859],
  [38.840492, -77.121375],
  [38.843396, -77.1106],
  [38.841366, -77.107019],
  [38.838534, -77.102352],
  [38.836907, -77.100061],
  [38.827531, -77.087489],
  [38.83291, -77.08538],
  [38.840185, -77.085111],
  [38.843954, -77.085504],
  [38.843735, -77.078377],
  [38.84369, -77.077187],
  [38.843961, -77.071269],
  [38.843962, -77.070453],
  [38.843796, -77.067907],
  [38.843873, -77.066981],
  [38.843969, -77.066498],
  [38.844028, -77.066272],
  [38.844219, -77.065681],
  [38.84457, -77.064951],
  [38.840358, -77.053101], 
  [38.841562, -77.0505],
  [38.839446, -77.046213],
  [38.836968, -77.045261],
  [38.83237, -77.043543],
  [38.832571, -77.039856],
  [38.82945, -77.037765],
  [38.824059, -77.039335],
  [38.818137, -77.03882],
  [38.814786, -77.037417],
  [38.795892, -77.039047],
  [38.791928, -77.055485],
  [38.795745, -77.063399],
  [38.799959, -77.072645],
  [38.800462, -77.074933],
  [38.801605, -77.084105],
  [38.803464, -77.100146],
  [38.803407, -77.104944],
  [38.802071, -77.112205],
  [38.800753, -77.119898],
  [38.810357, -77.144359]
];

var Falls_Church = [
  [38.898463, -77.194994],
  [38.890936, -77.169338],
  [38.88155, -77.157301],
  [38.872707, -77.155246],
  [38.875827, -77.165642],
  [38.879032, -77.182197],
  [38.886025, -77.194224],
  [38.892763, -77.19224],
  [38.895229, -77.191078],
  [ 38.898463, -77.194994]
]

var Arlington = [
  [38.893245, -77.172276],
  [38.915643, -77.143694],
  [38.933589, -77.119228],
  [38.931143, -77.117522],
  [38.928401, -77.116052],
  [38.926605, -77.114296],
  [38.923707, -77.111358],
  [38.920978, -77.108015],
  [38.916169, -77.104278],
  [38.910081, -77.099302],
  [38.905811, -77.093312],
  [38.902328, -77.078565],
  [38.900812, -77.069868],
  [38.896745, -77.066978],
  [38.888396, -77.063897],
  [38.88019, -77.054886],
  [38.875988, -77.051457],
  [38.871519, -77.048422], 
  [38.874485, -77.046989],
  [38.871263, -77.040531],
  [38.865477, -77.03778],
  [38.863266, -77.041801],
  [38.861318, -77.03762],
  [38.857267, -77.03406],
  [38.851702, -77.032214],
  [38.845296, -77.032903],
  [38.840831, -77.034516],
  [38.839582, -77.042102],
  [38.841269, -77.046627],
  [38.844923, -77.063582],
  [38.843806, -77.068331],
  [38.893245, -77.172276]
]

var marker = [
  {'Location': ['38.805794', '-77.040055'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1300000'},
  {'Location': ['38.8075983', '-77.0624428'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22301', 'Price': '349900'},
  {'Location': ['38.7966455', '-77.0743261'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '239900'},
  {'Location': ['38.8078264', '-77.0767982'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '339900'},
  {'Location': ['38.809257', '-77.135867'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '635000'},
  {'Location': ['38.8244245', '-77.1219883'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '574900'},
  {'Location': ['38.816021', '-77.122902'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '535000'},
  {'Location': ['38.8005144', '-77.144193'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '289900'},
  {'Location': ['38.7954795', '-77.0485341'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '280000'},
  {'Location': ['38.8148621', '-77.1222753'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '349900'},
  {'Location': ['38.8357133', '-77.1020029'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '375000'},
  {'Location': ['38.7884021', '-77.0688935'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '423000'},
  {'Location': ['38.767098', '-77.141719'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '369900'},
  {'Location': ['38.7954795', '-77.0485341'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '275000'},
  {'Location': ['38.8058373', '-77.1252488'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '455000'},
  {'Location': ['38.745408', '-77.176366'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '565000'},
  {'Location': ['38.8368059', '-77.0523442'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22305', 'Price': '499000'},
  {'Location': ['38.8367174', '-77.0778635'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '415000'},
  {'Location': ['38.8005144', '-77.144193'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '299900'},
  {'Location': ['38.8028628', '-77.049048'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1695000'},
  {'Location': ['38.743153', '-77.099029'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '239500'},
  {'Location': ['38.8389007', '-77.1083137'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '340000'},
  {'Location': ['38.7653859', '-77.1399942'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '335000'},
  {'Location': ['38.816021', '-77.122902'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '560000'},
  {'Location': ['38.789775', '-77.142698'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '485000'},
  {'Location': ['38.7641352', '-77.0604264'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '740000'},
  {'Location': ['38.8038764', '-77.0601988'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '700000'},
  {'Location': ['38.7964327', '-77.1136613'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '690000'},
  {'Location': ['38.8108767', '-77.1168303'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '840000'},
  {'Location': ['38.7830307', '-77.0621803'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '1200000'},
  {'Location': ['38.7295056', '-77.0526011'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22308', 'Price': '775000'},
  {'Location': ['38.8080458', '-77.1392472'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '282500'},
  {'Location': ['38.8030258', '-77.1196599'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '356000'},
  {'Location': ['38.7855197', '-77.1268239'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '889000'},
  {'Location': ['38.8088518', '-77.1248894'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '279000'},
  {'Location': ['38.72748', '-77.11472'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '651220'},
  {'Location': ['38.7742893', '-77.0568479'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '283500'},
  {'Location': ['38.8100235', '-77.090329'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '1398500'},
  {'Location': ['38.8068734', '-77.0703422'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '370000'},
  {'Location': ['38.8083478', '-77.0966575'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '590000'},
  {'Location': ['38.8206127', '-77.1003772'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '2595000'},
  {'Location': ['38.8248732', '-77.1516845'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '985000'},
  {'Location': ['38.8356193', '-77.0856936'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '475000'},
  {'Location': ['38.7967365', '-77.0404011'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1995000'},
  {'Location': ['38.769393', '-77.0670631'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '675000'},
  {'Location': ['38.7966641', '-77.0420529'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1950000'},
  {'Location': ['38.8351225', '-77.1020737'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '239900'},
  {'Location': ['38.8089122', '-77.05666'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '709000'},
  {'Location': ['38.748346', '-77.174866'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '589000'},
  {'Location': ['38.8005144', '-77.144193'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '299000'},
  {'Location': ['38.774886', '-77.130262'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '629950'},
  {'Location': ['38.7620099', '-77.0987449'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '345000'},
  {'Location': ['38.8358678', '-77.1059374'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22311', 'Price': '279900'},
  {'Location': ['38.795069', '-77.044295'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '875000'},
  {'Location': ['38.8088232', '-77.1251168'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '399900'},
  {'Location': ['38.8098657', '-77.1168471'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '325000'},
  {'Location': ['38.8103773', '-77.0831688'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '620000'},
  {'Location': ['38.8421491', '-77.0516341'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '589000'},
  {'Location': ['38.8005144', '-77.144193'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '399000'},
  {'Location': ['38.7953322', '-77.1120879'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '1250000'},
  {'Location': ['38.746201', '-77.08289'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '399900'},
  {'Location': ['38.8039282', '-77.0935998'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '625000'},
  {'Location': ['38.8277067', '-77.1164996'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '389999'},
  {'Location': ['38.8088714', '-77.1295458'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '274900'},
  {'Location': ['38.8225648', '-77.1183811'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '915000'},
  {'Location': ['38.8046445', '-77.054535'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1165000'},
  {'Location': ['38.767073', '-77.1448489'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '320000'},
  {'Location': ['38.7663387', '-77.1385845'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '519900'},
  {'Location': ['38.7959731', '-77.1100875'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '930000'},
  {'Location': ['38.7746704', '-77.1439538'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '620000'},
  {'Location': ['38.8370471', '-77.1440898'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '699900'},
  {'Location': ['38.8054684', '-77.1618849'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '725000'},
  {'Location': ['38.820313', '-77.143477'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '592000'},
  {'Location': ['38.803175', '-77.0650186'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '599900'},
  {'Location': ['38.825791', '-77.051231'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22301', 'Price': '650000'},
  {'Location': ['38.8397179', '-77.1046468'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '494000'},
  {'Location': ['38.8277161', '-77.1064013'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '985000'},
  {'Location': ['38.798588', '-77.0428413'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '895000'},
  {'Location': ['38.8398211', '-77.0703535'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22305', 'Price': '1225000'},
  {'Location': ['38.8141302', '-77.1199544'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '319900'},
  {'Location': ['38.816359', '-77.042678'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '775000'},
  {'Location': ['38.810152', '-77.047366'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1295000'},
  {'Location': ['38.798814', '-77.045366'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '899500'},
  {'Location': ['38.7357591', '-77.0793131'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '499900'},
  {'Location': ['38.723635', '-77.0691506'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22308', 'Price': '750000'},
  {'Location': ['38.7781129', '-77.095814'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '499950'},
  {'Location': ['38.7045941', '-77.1094357'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '635000'},
  {'Location': ['38.8421461', '-77.1201117'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '235000'},
  {'Location': ['38.811216', '-77.05454'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '725000'},
  {'Location': ['38.8422637', '-77.1168804'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '299900'},
  {'Location': ['38.8420971', '-77.0511763'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '649000'},
  {'Location': ['38.8010806', '-77.1197906'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '365000'},
  {'Location': ['38.8378637', '-77.1055539'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '319000'},
  {'Location': ['38.8201499', '-77.0598418'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22301', 'Price': '1075000'},
  {'Location': ['38.8108239', '-77.0508142'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '615000'},
  {'Location': ['38.738559', '-77.169403'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '475000'},
  {'Location': ['38.7900185', '-77.0668558'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '275000'},
  {'Location': ['38.83064', '-77.084253'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '439900'},
  {'Location': ['38.8411582', '-77.1029207'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '539900'},
  {'Location': ['38.8087477', '-77.1166877'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '399900'},
  {'Location': ['38.8205626', '-77.1020856'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '950000'},
  {'Location': ['38.760725', '-77.166591'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '459000'},
  {'Location': ['38.785392', '-77.1336989'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '525000'},
  {'Location': ['38.786148', '-77.1245391'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '599900'},
  {'Location': ['38.7995126', '-77.0529496'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '676000'},
  {'Location': ['38.8121304', '-77.0422223'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '595000'},
  {'Location': ['38.775382', '-77.0677912'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '739000'},
  {'Location': ['38.7762607', '-77.0571485'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '295000'},
  {'Location': ['38.7174938', '-77.0908685'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '849000'},
  {'Location': ['38.8349599', '-77.1022827'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '249900'},
  {'Location': ['38.7773104', '-77.1524035'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '649900'},
  {'Location': ['38.7746729', '-77.0614589'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '234900'},
  {'Location': ['38.8038764', '-77.0601988'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '380000'},
  {'Location': ['38.742522', '-77.096787'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '240000'},
  {'Location': ['38.738616', '-77.097077'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '225000'},
  {'Location': ['38.7347358', '-77.0801857'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '545000'},
  {'Location': ['38.767676', '-77.0870018'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '425000'},
  {'Location': ['38.8161962', '-77.1241212'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '299000'},
  {'Location': ['38.7411032', '-77.0936369'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '139000'},
  {'Location': ['38.8058373', '-77.1252488'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '457000'},
  {'Location': ['38.7915314', '-77.0777228'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '530000'},
  {'Location': ['38.824018', '-77.110921'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '2300000'},
  {'Location': ['38.795053', '-77.0440221'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '899000'},
  {'Location': ['38.7269259', '-77.075536'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22308', 'Price': '724900'},
  {'Location': ['38.791859', '-77.105967'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '489900'},
  {'Location': ['38.8277067', '-77.1164996'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '459000'},
  {'Location': ['38.8050298', '-77.1249948'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '709500'},
  {'Location': ['38.791131', '-77.143547'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '499900'},
  {'Location': ['38.8087477', '-77.1166877'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '485000'},
  {'Location': ['38.747431', '-77.152714'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '799900'},
  {'Location': ['38.8123839', '-77.1399576'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '325000'},
  {'Location': ['38.8083926', '-77.1393006'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '249900'},
  {'Location': ['38.7888779', '-77.0779075'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '525000'},
  {'Location': ['38.8121304', '-77.0422223'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '499000'},
  {'Location': ['38.84292', '-77.1137662'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '255000'},
  {'Location': ['38.7434934', '-77.0740072'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '655000'},
  {'Location': ['38.8259169', '-77.1691419'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '474900'},
  {'Location': ['38.7966455', '-77.0743261'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '334900'},
  {'Location': ['38.8138331', '-77.12197'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '239900'},
  {'Location': ['38.753423', '-77.149271'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '339500'},
  {'Location': ['38.7654992', '-77.0873166'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '599900'},
  {'Location': ['38.8225196', '-77.0417487'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '470000'},
  {'Location': ['38.8123839', '-77.1399576'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '259900'},
  {'Location': ['38.8137877', '-77.1400541'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '199900'},
  {'Location': ['38.8354562', '-77.101952'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '282500'},
  {'Location': ['38.8126631', '-77.0658229'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22301', 'Price': '1150000'},
  {'Location': ['38.752462', '-77.151579'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '375000'},
  {'Location': ['38.7287975', '-77.0785937'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22308', 'Price': '799000'},
  {'Location': ['38.8086409', '-77.1378878'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '283900'},
  {'Location': ['38.8392597', '-77.1076295'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '215000'},
  {'Location': ['38.7064471', '-77.1051201'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '659900'},
  {'Location': ['38.814042', '-77.1294581'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '222500'},
  {'Location': ['38.7356261', '-77.0669921'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22308', 'Price': '745000'},
  {'Location': ['38.7966455', '-77.0743261'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '435000'},
  {'Location': ['38.8110544', '-77.1117204'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '180000'},
  {'Location': ['38.7888145', '-77.0711164'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '425000'},
  {'Location': ['38.7416915', '-77.1172574'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '545000'},
  {'Location': ['38.8135219', '-77.1220655'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '198000'},
  {'Location': ['38.775504', '-77.095859'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '520000'},
  {'Location': ['38.763427', '-77.099969'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '410000'},
  {'Location': ['38.8225196', '-77.0417487'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '424900'},
  {'Location': ['38.8239015', '-77.0751988'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '2375000'},
  {'Location': ['38.8148621', '-77.1222753'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '239900'},
  {'Location': ['38.77217', '-77.058763'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '289900'},
  {'Location': ['38.8123534', '-77.0849336'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '825000'},
  {'Location': ['38.8005144', '-77.144193'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '449000'},
  {'Location': ['38.796692', '-77.0847088'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '699000'},
  {'Location': ['38.8097873', '-77.0900142'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '715000'},
  {'Location': ['38.764711', '-77.143625'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '534900'},
  {'Location': ['38.81557', '-77.0414234'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '759900'},
  {'Location': ['38.8124759', '-77.055716'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22301', 'Price': '699900'},
  {'Location': ['38.8014079', '-77.1063788'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '799999'},
  {'Location': ['38.716072', '-77.1101999'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '479000'},
  {'Location': ['38.7430095', '-77.1164482'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '639900'},
  {'Location': ['38.7773674', '-77.1240627'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '639900'},
  {'Location': ['38.8121304', '-77.0422223'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '799000'},
  {'Location': ['38.81084', '-77.085327'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '625000'},
  {'Location': ['38.7742092', '-77.0529541'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '289000'},
  {'Location': ['38.7430231', '-77.097504'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '225000'},
  {'Location': ['38.753789', '-77.087919'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '310000'},
  {'Location': ['38.8102466', '-77.0954656'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '1225000'},
  {'Location': ['38.794889', '-77.077512'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '199000'},
  {'Location': ['38.7944145', '-77.0774941'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '269000'},
  {'Location': ['38.7871219', '-77.136956'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '597500'},
  {'Location': ['38.7046632', '-77.1210556'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '1595000'},
  {'Location': ['38.7842124', '-77.0955218'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '559990'},
  {'Location': ['38.8070873', '-77.1235666'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '710000'},
  {'Location': ['38.7313442', '-77.1086175'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '239000'},
  {'Location': ['38.7201616', '-77.0593471'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22308', 'Price': '1500000'},
  {'Location': ['38.724915', '-77.126178'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '206000'},
  {'Location': ['38.7999622', '-77.1333935'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '584931'},
  {'Location': ['38.798304', '-77.046993'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '979000'},
  {'Location': ['38.84258795', '-77.05072552'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '475000'},
  {'Location': ['38.811631', '-77.04963'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1234900'},
  {'Location': ['38.719938', '-77.080787'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '1299000'},
  {'Location': ['38.8232861', '-77.0749065'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '1049000'},
  {'Location': ['38.7619435', '-77.0546924'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '1500000'},
  {'Location': ['38.8066424', '-77.1233688'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '745000'},
  {'Location': ['38.812496', '-77.1216281'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '193800'},
  {'Location': ['38.8138672', '-77.1219511'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '234999'},
  {'Location': ['38.7920379', '-77.065778'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '1975000'},
  {'Location': ['38.8132346', '-77.0423597'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '320000'},
  {'Location': ['38.8150398', '-77.0569186'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22301', 'Price': '1500000'},
  {'Location': ['38.799086', '-77.044222'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '845000'},
  {'Location': ['38.74206', '-77.0554794'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22308', 'Price': '1479999'},
  {'Location': ['38.8141302', '-77.1199544'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '375000'},
  {'Location': ['38.7034596', '-77.0956792'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '1299000'},
  {'Location': ['38.81067', '-77.144468'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '729900'},
  {'Location': ['38.8337318', '-77.075165'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '1695000'},
  {'Location': ['38.8160324', '-77.0425641'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1197000'},
  {'Location': ['38.8110544', '-77.1117204'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '215000'},
  {'Location': ['38.7931276', '-77.1463817'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '924950'},
  {'Location': ['38.8137877', '-77.1400541'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '262500'},
  {'Location': ['38.8199974', '-77.1380995'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '270000'},
  {'Location': ['38.7859894', '-77.0735117'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '399000'},
  {'Location': ['38.7966455', '-77.0743261'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '250000'},
  {'Location': ['38.8123839', '-77.1399576'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '349900'},
  {'Location': ['38.8183781', '-77.052176'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22301', 'Price': '1025000'},
  {'Location': ['38.7184646', '-77.0937909'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '1199000'},
  {'Location': ['38.8274314', '-77.0789084'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '889000'},
  {'Location': ['38.8106781', '-77.1235688'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '369900'},
  {'Location': ['38.8005277', '-77.0938358'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '425000'},
  {'Location': ['38.8087889', '-77.1379397'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '275000'},
  {'Location': ['38.8103154', '-77.127372'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '399000'},
  {'Location': ['38.7187812', '-77.0980619'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '1299000'},
  {'Location': ['38.8116125', '-77.0464553'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1359900'},
  {'Location': ['38.7989892', '-77.0492729'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1250000'},
  {'Location': ['38.816874', '-77.0400556'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1250000'},
  {'Location': ['38.803175', '-77.0650186'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '599900'},
  {'Location': ['38.7646368', '-77.109638'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '575000'},
  {'Location': ['38.8010806', '-77.1197906'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '285000'},
  {'Location': ['38.8039283', '-77.0655989'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '599900'},
  {'Location': ['38.7746172', '-77.0701624'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '1200000'},
  {'Location': ['38.803175', '-77.0650186'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '650000'},
  {'Location': ['38.8249578', '-77.0876763'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '769000'},
  {'Location': ['38.7641942', '-77.0848212'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '699900'},
  {'Location': ['38.8317934', '-77.1571667'], 'Property_Type': 'Single Family Residential', 'City': 'Annandale', 'Zip_Code': '22003', 'Price': '535000'},
  {'Location': ['38.8086035', '-77.1433718'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '280000'},
  {'Location': ['38.8055089', '-77.1416244'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '299999'},
  {'Location': ['38.7188188', '-77.098579'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '1395000'},
  {'Location': ['38.8064625', '-77.0449325'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1795000'},
  {'Location': ['38.7742893', '-77.0568479'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '279000'},
  {'Location': ['38.8121304', '-77.0422223'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1150000'},
  {'Location': ['38.797619', '-77.042084'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1295000'},
  {'Location': ['38.84292', '-77.1137662'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '329000'},
  {'Location': ['38.8106781', '-77.1235688'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '399900'},
  {'Location': ['38.8087889', '-77.1379397'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '449900'},
  {'Location': ['38.8127036', '-77.1276629'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '245000'},
  {'Location': ['38.7297529', '-77.0548048'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22308', 'Price': '689900'},
  {'Location': ['38.738274', '-77.076248'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '908990'},
  {'Location': ['38.7237759', '-77.1162909'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '590000'},
  {'Location': ['38.8108475', '-77.1197184'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '678000'},
  {'Location': ['38.73452576', '-77.06133643'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22308', 'Price': '1329000'},
  {'Location': ['38.8420971', '-77.0511763'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '600000'},
  {'Location': ['38.77217', '-77.058763'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '270000'},
  {'Location': ['38.836783', '-77.053502'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22305', 'Price': '480000'},
  {'Location': ['38.7193547', '-77.0981519'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '879500'},
  {'Location': ['38.7967392', '-77.0466119'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '439900'},
  {'Location': ['38.7852713', '-77.0730735'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '569000'},
  {'Location': ['38.8123708', '-77.126107'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '245000'},
  {'Location': ['38.7439062', '-77.1089862'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '514000'},
  {'Location': ['38.8041864', '-77.0529609'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '825000'},
  {'Location': ['38.8421491', '-77.0516341'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '499900'},
  {'Location': ['38.744132', '-77.153991'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '798000'},
  {'Location': ['38.7965106', '-77.1144185'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '610000'},
  {'Location': ['38.803437', '-77.041168'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '2595000'},
  {'Location': ['38.814744', '-77.0505027'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '525000'},
  {'Location': ['38.8358678', '-77.1059374'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22311', 'Price': '373999'},
  {'Location': ['38.8150183', '-77.0480478'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '525000'},
  {'Location': ['38.7024319', '-77.1118856'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '1397000'},
  {'Location': ['38.8176041', '-77.0887553'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '1244000'},
  {'Location': ['38.828821', '-77.075238'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '849900'},
  {'Location': ['38.805021', '-77.040723'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '819900'},
  {'Location': ['38.7974338', '-77.0480084'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '260000'},
  {'Location': ['38.8424141', '-77.1061541'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '799000'},
  {'Location': ['38.8005144', '-77.144193'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '459000'},
  {'Location': ['38.8221807', '-77.0455061'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '605900'},
  {'Location': ['38.752862', '-77.149516'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '249950'},
  {'Location': ['38.8328048', '-77.0998081'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '144500'},
  {'Location': ['38.8093459', '-77.0428074'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1134000'},
  {'Location': ['38.8103263', '-77.0911495'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '1450000'},
  {'Location': ['38.7744362', '-77.0563589'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '295000'},
  {'Location': ['38.8030469', '-77.1502465'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '540000'},
  {'Location': ['38.8025852', '-77.0469341'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '848000'},
  {'Location': ['38.8017562', '-77.0406316'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1899000'},
  {'Location': ['38.8181321', '-77.0425265'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '289000'},
  {'Location': ['38.7716767', '-77.0568511'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '243000'},
  {'Location': ['38.8065585', '-77.1273256'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '819900'},
  {'Location': ['38.7744942', '-77.0544285'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22307', 'Price': '269000'},
  {'Location': ['38.7454583', '-77.0674868'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '699000'},
  {'Location': ['38.8015118', '-77.1192018'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '270000'},
  {'Location': ['38.8422614', '-77.1161064'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '319000'},
  {'Location': ['38.8095497', '-77.1553918'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '1232000'},
  {'Location': ['38.8031901', '-77.0423014'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1599000'},
  {'Location': ['38.7900175', '-77.0708145'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '579000'},
  {'Location': ['38.7207803', '-77.0591222'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22308', 'Price': '1784000'},
  {'Location': ['38.8087889', '-77.1379397'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '285900'},
  {'Location': ['38.829419', '-77.075491'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '1650000'},
  {'Location': ['38.814744', '-77.0505027'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '379900'},
  {'Location': ['38.8114316', '-77.0498379'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1210000'},
  {'Location': ['38.8152427', '-77.0874065'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1450000'},
  {'Location': ['38.7959267', '-77.0430323'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1899000'},
  {'Location': ['38.8298206', '-77.0877011'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '555000'},
  {'Location': ['38.84292', '-77.1137662'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '250000'},
  {'Location': ['38.812929', '-77.1026475'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '829900'},
  {'Location': ['38.803716', '-77.0480712'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1000000'},
  {'Location': ['38.7033914', '-77.0974101'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '1150000'},
  {'Location': ['38.8059641', '-77.1230541'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '889000'},
  {'Location': ['38.8339117', '-77.0790756'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '365000'},
  {'Location': ['38.7655546', '-77.0885305'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22306', 'Price': '549714'},
  {'Location': ['38.813294', '-77.1221162'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '213000'},
  {'Location': ['38.829347', '-77.061742'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22305', 'Price': '649000'},
  {'Location': ['38.8422539', '-77.116104'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '299000'},
  {'Location': ['38.7916463', '-77.0934152'], 'Property_Type': 'Vacant Land', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '1202500'},
  {'Location': ['38.8030502', '-77.0399631'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '2920000'},
  {'Location': ['38.804234', '-77.0506869'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '395000'},
  {'Location': ['38.8005144', '-77.144193'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '399900'},
  {'Location': ['38.8086409', '-77.1378878'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '399000'},
  {'Location': ['38.7380311', '-77.0609886'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22308', 'Price': '725000'},
  {'Location': ['38.8225196', '-77.0417487'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '360000'},
  {'Location': ['38.7360011', '-77.0883057'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '485000'},
  {'Location': ['38.8284943', '-77.0491105'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22301', 'Price': '1199000'},
  {'Location': ['38.8182875', '-77.0450451'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '699000'},
  {'Location': ['38.8061034', '-77.0434672'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1649000'},
  {'Location': ['38.78439', '-77.1033265'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '699950'},
  {'Location': ['38.739115', '-77.170563'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '415000'},
  {'Location': ['38.8123839', '-77.1399576'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '325000'},
  {'Location': ['38.7960819', '-77.048261'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '221000'},
  {'Location': ['38.8376676', '-77.1150483'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22311', 'Price': '809900'},
  {'Location': ['38.8377708', '-77.1155785'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22311', 'Price': '843735'},
  {'Location': ['38.8377708', '-77.1155785'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22311', 'Price': '845455'},
  {'Location': ['38.841973', '-77.120213'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '248000'},
  {'Location': ['38.8137819', '-77.1219982'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '175000'},
  {'Location': ['38.789318', '-77.0687873'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22303', 'Price': '418000'},
  {'Location': ['38.8158499', '-77.1240575'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22304', 'Price': '219000'},
  {'Location': ['38.7261424', '-77.0581329'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22308', 'Price': '739000'},
  {'Location': ['38.8195701', '-77.0513331'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22301', 'Price': '1049990'},
  {'Location': ['38.8244562', '-77.0631247'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22301', 'Price': '1725000'},
  {'Location': ['38.8049834', '-77.0541527'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '799900'},
  {'Location': ['38.733999', '-77.047562'], 'Property_Type': 'Vacant Land', 'City': 'Alexandria', 'Zip_Code': '22308', 'Price': '1350000'},
  {'Location': ['38.805933', '-77.048195'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1190000'},
  {'Location': ['38.7998757', '-77.0410617'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1950000'},
  {'Location': ['38.7828678', '-77.0937459'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '514900'},
  {'Location': ['38.8203725', '-77.1362175'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22312', 'Price': '165000'},
  {'Location': ['38.773417', '-77.143978'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '510000'},
  {'Location': ['38.744645', '-77.153774'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22315', 'Price': '800000'},
  {'Location': ['38.8016037', '-77.0525111'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '1399000'},
  {'Location': ['38.7753076', '-77.0915879'], 'Property_Type': 'Single Family Residential', 'City': 'Alexandria', 'Zip_Code': '22310', 'Price': '484500'},
  {'Location': ['38.8036121', '-77.0664315'], 'Property_Type': 'Condo/Co-op', 'City': 'Alexandria', 'Zip_Code': '22314', 'Price': '899000'},
  {'Location': ['38.7396448', '-77.0975165'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22309', 'Price': '197900'},
  {'Location': ['38.8817862', '-77.1341529'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22205', 'Price': '999500'},
  {'Location': ['38.883266', '-77.1002593'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1095000'},
  {'Location': ['38.8851994', '-77.0935524'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '534900'},
  {'Location': ['38.8643372', '-77.0723865'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '1050000'},
  {'Location': ['38.8910971', '-77.0819'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '455000'},
  {'Location': ['38.8953559', '-77.1399819'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '399000'},
  {'Location': ['38.8952473', '-77.1010853'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '749900'},
  {'Location': ['38.8992003', '-77.1164054'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '224500'},
  {'Location': ['38.8808805', '-77.1079761'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '799900'},
  {'Location': ['38.8610858', '-77.0666362'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '525000'},
  {'Location': ['38.9109502', '-77.1359104'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1685000'},
  {'Location': ['38.8615421', '-77.0867738'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '669900'},
  {'Location': ['38.8897579', '-77.0753148'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '369900'},
  {'Location': ['38.8753421', '-77.1094305'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '379500'},
  {'Location': ['38.8476039', '-77.0954659'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '349900'},
  {'Location': ['38.8639561', '-77.0655872'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '665000'},
  {'Location': ['38.883417', '-77.111767'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1475000'},
  {'Location': ['38.8911391', '-77.1127173'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1395000'},
  {'Location': ['38.9026681', '-77.1056146'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1248000'},
  {'Location': ['38.847395', '-77.066733'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '1115000'},
  {'Location': ['38.8922597', '-77.0986913'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1650000'},
  {'Location': ['38.8672129', '-77.1372137'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '975000'},
  {'Location': ['38.8805826', '-77.0883467'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1850000'},
  {'Location': ['38.9052697', '-77.118471'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1200000'},
  {'Location': ['38.8373459', '-77.0950373'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '589000'},
  {'Location': ['38.8759208', '-77.1087585'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '384500'},
  {'Location': ['38.8830403', '-77.0970192'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1385000'},
  {'Location': ['38.8517131', '-77.0718937'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '1099000'},
  {'Location': ['38.8356193', '-77.0856936'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '475000'},
  {'Location': ['38.8616317', '-77.0495203'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '950000'},
  {'Location': ['38.895501', '-77.1212129'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '819999'},
  {'Location': ['38.8421491', '-77.0516341'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '589000'},
  {'Location': ['38.8960821', '-77.0760557'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '445000'},
  {'Location': ['38.8851994', '-77.0935524'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '409900'},
  {'Location': ['38.8835982', '-77.1101484'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '939000'},
  {'Location': ['38.8528824', '-77.1048213'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '200000'},
  {'Location': ['38.8885962', '-77.1640175'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22213', 'Price': '515000'},
  {'Location': ['38.897376', '-77.1197375'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '270000'},
  {'Location': ['38.8927829', '-77.0733941'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '480000'},
  {'Location': ['38.9195248', '-77.1095706'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1799900'},
  {'Location': ['38.884794', '-77.115745'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '795000'},
  {'Location': ['38.8659497', '-77.0813815'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '765000'},
  {'Location': ['38.8851863', '-77.0948752'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '457000'},
  {'Location': ['38.912918', '-77.1405057'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '849900'},
  {'Location': ['38.8918969', '-77.0700775'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '165000'},
  {'Location': ['38.893513', '-77.084095'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '310000'},
  {'Location': ['38.8397179', '-77.1046468'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '494000'},
  {'Location': ['38.8746993', '-77.115731'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '879900'},
  {'Location': ['38.8802163', '-77.1012089'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1350000'},
  {'Location': ['38.8628361', '-77.1242694'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '599900'},
  {'Location': ['38.88095', '-77.1070517'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '515000'},
  {'Location': ['38.8712447', '-77.106867'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '285900'},
  {'Location': ['38.9246388', '-77.1218919'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1850000'},
  {'Location': ['38.8780175', '-77.1243706'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22205', 'Price': '649000'},
  {'Location': ['38.87815', '-77.113'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '899900'},
  {'Location': ['38.8633978', '-77.0730898'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '969000'},
  {'Location': ['38.84301037', '-77.09543158'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '457900'},
  {'Location': ['38.880917', '-77.1186076'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '1635000'},
  {'Location': ['38.878911', '-77.1293147'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22205', 'Price': '695000'},
  {'Location': ['38.8420971', '-77.0511763'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '649000'},
  {'Location': ['38.9200799', '-77.1274607'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1683000'},
  {'Location': ['38.86037', '-77.0531981'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '759000'},
  {'Location': ['38.84262', '-77.100372'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '509900'},
  {'Location': ['38.8971766', '-77.0696859'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1495000'},
  {'Location': ['38.83064', '-77.084253'], 'Property_Type': 'Townhouse', 'City': 'Alexandria', 'Zip_Code': '22302', 'Price': '439900'},
  {'Location': ['38.8411582', '-77.1029207'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '539900'},
  {'Location': ['38.8808805', '-77.1079761'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '625000'},
  {'Location': ['38.9179514', '-77.1163134'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1150000'},
  {'Location': ['38.8863313', '-77.1626458'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22213', 'Price': '459950'},
  {'Location': ['38.8968622', '-77.1596831'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22213', 'Price': '869900'},
  {'Location': ['38.894751', '-77.083634'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '416000'},
  {'Location': ['38.8926901', '-77.0953644'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1695000'},
  {'Location': ['38.8929551', '-77.0781344'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1450000'},
  {'Location': ['38.8673543', '-77.0921274'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '749999'},
  {'Location': ['38.888757', '-77.083015'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '359999'},
  {'Location': ['38.8927162', '-77.0953893'], 'Property_Type': 'Vacant Land', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1300000'},
  {'Location': ['38.8948991', '-77.1370339'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22205', 'Price': '1198000'},
  {'Location': ['38.841428', '-77.0998573'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '385000'},
  {'Location': ['38.8997473', '-77.1610761'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22213', 'Price': '1998000'},
  {'Location': ['38.8718171', '-77.1241346'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '1350000'},
  {'Location': ['38.895834', '-77.0823802'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '459950'},
  {'Location': ['38.8927829', '-77.0733941'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '619900'},
  {'Location': ['38.86037', '-77.0531981'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '749000'},
  {'Location': ['38.8813439', '-77.1143134'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '434900'},
  {'Location': ['38.8694533', '-77.1088291'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '310000'},
  {'Location': ['38.8962696', '-77.0943089'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '288000'},
  {'Location': ['38.8528824', '-77.1048213'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '194900'},
  {'Location': ['38.86369713', '-77.06745401'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '895000'},
  {'Location': ['38.8915569', '-77.122921'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '799900'},
  {'Location': ['38.883151', '-77.1026837'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '644900'},
  {'Location': ['38.8918969', '-77.0700775'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '219950'},
  {'Location': ['38.843579', '-77.1050751'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '1150000'},
  {'Location': ['38.8914802', '-77.0820559'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1239900'},
  {'Location': ['38.8421781', '-77.0904173'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '629000'},
  {'Location': ['38.8969728', '-77.117714'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '285000'},
  {'Location': ['38.8804009', '-77.1327178'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22205', 'Price': '1075000'},
  {'Location': ['38.8875138', '-77.0932363'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '849900'},
  {'Location': ['38.843329', '-77.099924'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '405000'},
  {'Location': ['38.8878345', '-77.0746062'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1189000'},
  {'Location': ['38.8978586', '-77.114786'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '219000'},
  {'Location': ['38.8678499', '-77.1073229'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '899900'},
  {'Location': ['38.8675287', '-77.1076825'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '825000'},
  {'Location': ['38.8893071', '-77.1618423'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22213', 'Price': '674999'},
  {'Location': ['38.881029', '-77.1105655'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '649900'},
  {'Location': ['38.887627', '-77.1179316'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '825000'},
  {'Location': ['38.8587874', '-77.0681838'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '1690000'},
  {'Location': ['38.895834', '-77.0823802'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '540000'},
  {'Location': ['38.8883873', '-77.10011'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1450000'},
  {'Location': ['38.8661579', '-77.1190631'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '850000'},
  {'Location': ['38.8918969', '-77.0700775'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '167000'},
  {'Location': ['38.888366', '-77.0724365'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '649900'},
  {'Location': ['38.8813439', '-77.1143134'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '525000'},
  {'Location': ['38.883151', '-77.1026837'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '649900'},
  {'Location': ['38.8925814', '-77.1518699'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22205', 'Price': '1650000'},
  {'Location': ['38.9137543', '-77.1275955'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '2339000'},
  {'Location': ['38.8587341', '-77.0897445'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '689000'},
  {'Location': ['38.88095', '-77.1070517'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '620000'},
  {'Location': ['38.8639561', '-77.0655872'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '349000'},
  {'Location': ['38.843195', '-77.098221'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '405000'},
  {'Location': ['38.8711352', '-77.108553'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '260000'},
  {'Location': ['38.8918642', '-77.0761338'], 'Property_Type': 'Condo/Co-op', 'City': 'Rosslyn', 'Zip_Code': '22209', 'Price': '985000'},
  {'Location': ['38.8942655', '-77.1240784'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '649900'},
  {'Location': ['38.8921247', '-77.0774241'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1025000'},
  {'Location': ['38.8565712', '-77.0488007'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '635000'},
  {'Location': ['38.84258795', '-77.05072552'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '475000'},
  {'Location': ['38.888295', '-77.101916'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1179000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '380000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '324900'},
  {'Location': ['38.8921247', '-77.0774241'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '925000'},
  {'Location': ['38.8547432', '-77.072231'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '1035000'},
  {'Location': ['38.8820612', '-77.1051409'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '725000'},
  {'Location': ['38.8851994', '-77.0935524'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '545900'},
  {'Location': ['38.9194734', '-77.1371238'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1450000'},
  {'Location': ['38.893125', '-77.0773784'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1600000'},
  {'Location': ['38.8897579', '-77.0753148'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '314899'},
  {'Location': ['38.895834', '-77.0823802'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '474900'},
  {'Location': ['38.9148907', '-77.1419102'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1965000'},
  {'Location': ['38.8978797', '-77.1549424'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1539000'},
  {'Location': ['38.8759208', '-77.1087585'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '378000'},
  {'Location': ['38.8920289', '-77.1613457'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22213', 'Price': '1089000'},
  {'Location': ['38.8629017', '-77.1347251'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22044', 'Price': '235000'},
  {'Location': ['38.8470264', '-77.0843088'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '264900'},
  {'Location': ['38.8851863', '-77.0948752'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '489900'},
  {'Location': ['38.8539111', '-77.1050426'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '360000'},
  {'Location': ['38.8905349', '-77.0786646'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '789900'},
  {'Location': ['38.8984498', '-77.1098853'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '874900'},
  {'Location': ['38.8962928', '-77.1063299'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '749000'},
  {'Location': ['38.8562497', '-77.085809'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '370000'},
  {'Location': ['38.9010038', '-77.1115485'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1599000'},
  {'Location': ['38.8746808', '-77.085998'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '290000'},
  {'Location': ['38.8619459', '-77.0494715'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '840000'},
  {'Location': ['38.8610858', '-77.0666362'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '419500'},
  {'Location': ['38.8851994', '-77.0935524'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '520000'},
  {'Location': ['38.8812986', '-77.1342474'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22205', 'Price': '1000000'},
  {'Location': ['38.8847695', '-77.1045146'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '840000'},
  {'Location': ['38.8981643', '-77.0745266'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '625000'},
  {'Location': ['38.8639561', '-77.0655872'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '354900'},
  {'Location': ['38.8851994', '-77.0935524'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '539900'},
  {'Location': ['38.853961', '-77.1215104'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '230000'},
  {'Location': ['38.8901419', '-77.1293035'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22205', 'Price': '1499000'},
  {'Location': ['38.8897579', '-77.0753148'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '298500'},
  {'Location': ['38.8927134', '-77.0769283'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '750000'},
  {'Location': ['38.8502954', '-77.093656'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '950000'},
  {'Location': ['38.8917723', '-77.1191003'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '825000'},
  {'Location': ['38.8957772', '-77.0816976'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '389500'},
  {'Location': ['38.8808805', '-77.1079761'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '779800'},
  {'Location': ['38.8695513', '-77.1140096'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '880000'},
  {'Location': ['38.866997', '-77.0970398'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '199900'},
  {'Location': ['38.8910971', '-77.0819'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1575000'},
  {'Location': ['38.9014266', '-77.1189205'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1395000'},
  {'Location': ['38.8961566', '-77.1044228'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '525000'},
  {'Location': ['38.8420971', '-77.0511763'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '600000'},
  {'Location': ['38.8476483', '-77.0901034'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '850000'},
  {'Location': ['38.8539111', '-77.1050426'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '285000'},
  {'Location': ['38.8616317', '-77.0495203'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '875000'},
  {'Location': ['38.8586777', '-77.1158801'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '190000'},
  {'Location': ['38.8993102', '-77.085185'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1274889'},
  {'Location': ['38.8820612', '-77.1051409'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '675000'},
  {'Location': ['38.878709', '-77.1268764'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22205', 'Price': '1050000'},
  {'Location': ['38.876582', '-77.0988712'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1435000'},
  {'Location': ['38.9034891', '-77.1577284'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22213', 'Price': '1499900'},
  {'Location': ['38.8910242', '-77.0683703'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '135000'},
  {'Location': ['38.8657629', '-77.1209882'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '650000'},
  {'Location': ['38.8957772', '-77.0816976'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '399900'},
  {'Location': ['38.88302', '-77.114316'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '409900'},
  {'Location': ['38.8820612', '-77.1051409'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '468000'},
  {'Location': ['38.8971766', '-77.0696859'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1695000'},
  {'Location': ['38.8906186', '-77.1253032'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1365000'},
  {'Location': ['38.8688077', '-77.0971291'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '814000'},
  {'Location': ['38.8918969', '-77.0700775'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '192500'},
  {'Location': ['38.8927829', '-77.0733941'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '575000'},
  {'Location': ['38.8918969', '-77.0700775'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '162500'},
  {'Location': ['38.9103179', '-77.138561'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1500000'},
  {'Location': ['38.8421491', '-77.0516341'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '499900'},
  {'Location': ['38.895834', '-77.0823802'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '395000'},
  {'Location': ['38.8590294', '-77.1074577'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '1169000'},
  {'Location': ['38.8875445', '-77.0864525'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '449950'},
  {'Location': ['38.8944539', '-77.0823136'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '299000'},
  {'Location': ['38.8856534', '-77.0916778'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '2675000'},
  {'Location': ['38.8960821', '-77.0760557'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1075000'},
  {'Location': ['38.901065', '-77.1171225'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1725000'},
  {'Location': ['38.8922181', '-77.0777168'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '925000'},
  {'Location': ['38.8910242', '-77.0683703'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '195000'},
  {'Location': ['38.90195', '-77.1035017'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '969995'},
  {'Location': ['38.8424141', '-77.1061541'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '799000'},
  {'Location': ['38.902737', '-77.1374834'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1398000'},
  {'Location': ['38.8515589', '-77.1128521'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '1199000'},
  {'Location': ['38.8971766', '-77.0696859'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1098000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '184900'},
  {'Location': ['38.8896406', '-77.07476'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '288000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '325000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '124900'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '165000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '140000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '110000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '99999'},
  {'Location': ['38.8502833', '-77.1104247'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '724900'},
  {'Location': ['38.925151', '-77.124042'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1750000'},
  {'Location': ['38.8639561', '-77.0655872'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '329900'},
  {'Location': ['38.893125', '-77.0773784'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1598000'},
  {'Location': ['38.8847695', '-77.1045146'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '749999'},
  {'Location': ['38.8639561', '-77.0655872'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '349000'},
  {'Location': ['38.84326', '-77.09684'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '360000'},
  {'Location': ['38.891944', '-77.0702135'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '145000'},
  {'Location': ['38.891944', '-77.0702135'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '149000'},
  {'Location': ['38.881029', '-77.1105655'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '540000'},
  {'Location': ['38.9033391', '-77.1299327'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '2100000'},
  {'Location': ['38.8982649', '-77.1150548'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1499000'},
  {'Location': ['38.8982804', '-77.0972527'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '849000'},
  {'Location': ['38.8962928', '-77.1063299'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '444900'},
  {'Location': ['38.8910242', '-77.0683703'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '159950'},
  {'Location': ['38.891944', '-77.0702135'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '199950'},
  {'Location': ['38.8610858', '-77.0666362'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '534900'},
  {'Location': ['38.9167792', '-77.1270112'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '2250000'},
  {'Location': ['38.8605281', '-77.0869916'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '1350000'},
  {'Location': ['38.8943723', '-77.0989161'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1399000'},
  {'Location': ['38.8552412', '-77.0944203'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '747000'},
  {'Location': ['38.8298206', '-77.0877011'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '555000'},
  {'Location': ['38.881029', '-77.1105655'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '425000'},
  {'Location': ['38.8429114', '-77.1027601'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22206', 'Price': '399900'},
  {'Location': ['38.856203', '-77.0571434'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '1889000'},
  {'Location': ['38.8978262', '-77.073355'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '849000'},
  {'Location': ['38.88095', '-77.1070517'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '615000'},
  {'Location': ['38.8835982', '-77.1101484'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '750000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '149000'},
  {'Location': ['38.858197', '-77.1186958'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '850000'},
  {'Location': ['38.8625669', '-77.1006257'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '1100000'},
  {'Location': ['38.909172', '-77.152525'], 'Property_Type': 'Single Family Residential', 'City': 'Mclean', 'Zip_Code': '22101', 'Price': '1975000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '215000'},
  {'Location': ['38.8851994', '-77.0935524'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '725000'},
  {'Location': ['38.8978262', '-77.073355'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1695000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '239000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '295000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '99000'},
  {'Location': ['38.891944', '-77.0702135'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '190000'},
  {'Location': ['38.8909844', '-77.0682558'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '179900'},
  {'Location': ['38.888366', '-77.0724365'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '699900'},
  {'Location': ['38.8894692', '-77.1218422'], 'Property_Type': 'Parking', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '799900'},
  {'Location': ['38.862212', '-77.049195'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '1399000'},
  {'Location': ['38.8918969', '-77.0700775'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '279950'},
  {'Location': ['38.8616317', '-77.0495203'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '759000'},
  {'Location': ['38.8942157', '-77.0766904'], 'Property_Type': 'Condo/Co-op', 'City': 'Rosslyn', 'Zip_Code': '22209', 'Price': '1375000'},
  {'Location': ['38.8942157', '-77.0766904'], 'Property_Type': 'Condo/Co-op', 'City': 'Rosslyn', 'Zip_Code': '22209', 'Price': '2879000'},
  {'Location': ['38.898071', '-77.0848819'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1395000'},
  {'Location': ['38.8941465', '-77.1284945'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1550000'},
  {'Location': ['38.8976439', '-77.1378879'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1745000'},
  {'Location': ['38.8910971', '-77.0819'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '2275000'},
  {'Location': ['38.8942157', '-77.0766904'], 'Property_Type': 'Condo/Co-op', 'City': 'Rosslyn', 'Zip_Code': '22209', 'Price': '2278000'},
  {'Location': ['38.8927829', '-77.0733941'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '699000'},
  {'Location': ['38.9102124', '-77.1433258'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1899000'},
  {'Location': ['38.8942157', '-77.0766904'], 'Property_Type': 'Condo/Co-op', 'City': 'Rosslyn', 'Zip_Code': '22209', 'Price': '2120000'},
  {'Location': ['38.8942157', '-77.0766904'], 'Property_Type': 'Condo/Co-op', 'City': 'Rosslyn', 'Zip_Code': '22209', 'Price': '944000'},
  {'Location': ['38.8992003', '-77.1164054'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '225000'},
  {'Location': ['38.8971766', '-77.0696859'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '699900'},
  {'Location': ['38.8639561', '-77.0655872'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '265000'},
  {'Location': ['38.8577336', '-77.1159699'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '195000'},
  {'Location': ['38.8784227', '-77.0948699'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1399000'},
  {'Location': ['38.9003176', '-77.1463817'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1719000'},
  {'Location': ['38.852914', '-77.072665'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '1790900'},
  {'Location': ['38.8891531', '-77.1233255'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1814000'},
  {'Location': ['38.8971766', '-77.0696859'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '890000'},
  {'Location': ['38.8909844', '-77.0682558'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '625000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '110000'},
  {'Location': ['38.8651747', '-77.137586'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22044', 'Price': '250000'},
  {'Location': ['38.8863454', '-77.1064687'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1450000'},
  {'Location': ['38.8903859', '-77.0719387'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1999900'},
  {'Location': ['38.883266', '-77.1002593'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '699900'},
  {'Location': ['38.8887194', '-77.0970757'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '2478000'},
  {'Location': ['38.8971766', '-77.0696859'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '729000'},
  {'Location': ['38.8957176', '-77.1008942'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1050000'},
  {'Location': ['38.8978262', '-77.073355'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '2869000'},
  {'Location': ['38.9083058', '-77.1438651'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1387800'},
  {'Location': ['38.914848', '-77.143146'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1699000'},
  {'Location': ['38.8875445', '-77.0864525'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '745000'},
  {'Location': ['38.8769931', '-77.1190564'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '815000'},
  {'Location': ['38.8804951', '-77.093656'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1219800'},
  {'Location': ['38.8918969', '-77.0700775'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '244950'},
  {'Location': ['38.8918969', '-77.0700775'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '144000'},
  {'Location': ['38.9006431', '-77.1175828'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1874900'},
  {'Location': ['38.8957772', '-77.0816976'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '389900'},
  {'Location': ['38.891944', '-77.0702135'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '220000'},
  {'Location': ['38.8910971', '-77.0819'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '575000'},
  {'Location': ['38.905782', '-77.100085'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '2995000'},
  {'Location': ['38.8577336', '-77.1159699'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '214900'},
  {'Location': ['38.883266', '-77.1002593'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '749950'},
  {'Location': ['38.8820612', '-77.1051409'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '540000'},
  {'Location': ['38.9147027', '-77.132135'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1999999'},
  {'Location': ['38.9048069', '-77.1549649'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '2295000'},
  {'Location': ['38.9117431', '-77.104221'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1629000'},
  {'Location': ['38.8770712', '-77.0906886'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1475000'},
  {'Location': ['38.8810699', '-77.0870448'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1599000'},
  {'Location': ['38.8978262', '-77.073355'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1799500'},
  {'Location': ['38.9080404', '-77.132135'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '3600000'},
  {'Location': ['38.883266', '-77.1002593'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '689000'},
  {'Location': ['38.8927827', '-77.1691078'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22213', 'Price': '1599000'},
  {'Location': ['38.8639561', '-77.0655872'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '699999'},
  {'Location': ['38.8806206', '-77.093701'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '2249000'},
  {'Location': ['38.8907673', '-77.0965509'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '2699000'},
  {'Location': ['38.8868471', '-77.0937478'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '699900'},
  {'Location': ['38.8749744', '-77.121123'], 'Property_Type': 'Multi-Family (2-4 Unit)', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '1050000'},
  {'Location': ['38.914819', '-77.148466'], 'Property_Type': 'Single Family Residential', 'City': 'Mclean', 'Zip_Code': '22101', 'Price': '2499000'},
  {'Location': ['38.8961566', '-77.1044228'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '799900'},
  {'Location': ['38.8910242', '-77.0683703'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '136900'},
  {'Location': ['38.925531', '-77.123762'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1875000'},
  {'Location': ['38.8978262', '-77.073355'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1158000'},
  {'Location': ['38.8490065', '-77.0902889'], 'Property_Type': 'Townhouse', 'City': 'Arlington', 'Zip_Code': '22204', 'Price': '899900'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '215000'},
  {'Location': ['38.8803033', '-77.1127814'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '110000'},
  {'Location': ['38.8959709', '-77.1096853'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '2099900'},
  {'Location': ['38.910838', '-77.135917'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1695000'},
  {'Location': ['38.8910242', '-77.0683703'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '240000'},
  {'Location': ['38.9016751', '-77.1198869'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1725000'},
  {'Location': ['38.8955014', '-77.1294833'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '999900'},
  {'Location': ['38.8564458', '-77.068611'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22202', 'Price': '1449990'},
  {'Location': ['38.8918969', '-77.0700775'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '154900'},
  {'Location': ['38.9203439', '-77.1158189'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '3195000'},
  {'Location': ['38.8855587', '-77.1159544'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '999995'},
  {'Location': ['38.8713394', '-77.1374834'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22203', 'Price': '997000'},
  {'Location': ['38.9053351', '-77.1471008'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '2100000'},
  {'Location': ['38.8735544', '-77.0954993'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '2325000'},
  {'Location': ['38.902595', '-77.1150098'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1999999'},
  {'Location': ['38.8942295', '-77.1522687'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '2050000'},
  {'Location': ['38.8749663', '-77.1009392'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1800000'},
  {'Location': ['38.8978262', '-77.073355'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1180000'},
  {'Location': ['38.8785863', '-77.08916'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22201', 'Price': '1835000'},
  {'Location': ['38.9025404', '-77.1188306'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22207', 'Price': '1925000'},
  {'Location': ['38.8978262', '-77.073355'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '1400000'},
  {'Location': ['38.875845', '-77.1497971'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22205', 'Price': '2300000'},
  {'Location': ['38.8969562', '-77.1641315'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22213', 'Price': '1574999'},
  {'Location': ['38.8978262', '-77.073355'], 'Property_Type': 'Condo/Co-op', 'City': 'Arlington', 'Zip_Code': '22209', 'Price': '3495000'},
  {'Location': ['38.8811075', '-77.192679'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '995000'},
  {'Location': ['38.8863562', '-77.177207'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '549900'},
  {'Location': ['38.8863562', '-77.177207'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '532000'},
  {'Location': ['38.8804', '-77.210753'], 'Property_Type': 'Townhouse', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '529000'},
  {'Location': ['38.878629', '-77.20615'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '199000'},
  {'Location': ['38.8705592', '-77.181957'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '675000'},
  {'Location': ['38.909654', '-77.169469'], 'Property_Type': 'Townhouse', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '825000'},
  {'Location': ['38.893782', '-77.188628'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '224990'},
  {'Location': ['38.8999559', '-77.167636'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1000000'},
  {'Location': ['38.8657408', '-77.160762'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '625000'},
  {'Location': ['38.8876529', '-77.183002'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '550000'},
  {'Location': ['38.8710265', '-77.176768'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '515000'},
  {'Location': ['38.8590139', '-77.147745'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '239900'},
  {'Location': ['38.8772211', '-77.195917'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '249999'},
  {'Location': ['38.8986017', '-77.187072'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '485000'},
  {'Location': ['38.9113777', '-77.162784'], 'Property_Type': 'Single Family Residential', 'City': 'Mclean', 'Zip_Code': '22101', 'Price': '1200000'},
  {'Location': ['38.8712025', '-77.210837'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '379700'},
  {'Location': ['38.9194894', '-77.198186'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1237000'},
  {'Location': ['38.8615796', '-77.18727'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '649900'},
  {'Location': ['38.9009108', '-77.213763'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '379000'},
  {'Location': ['38.84419', '-77.139881'], 'Property_Type': 'Townhouse', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '540000'},
  {'Location': ['38.8568948', '-77.15428'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22044', 'Price': '699900'},
  {'Location': ['38.909417', '-77.17219'], 'Property_Type': 'Townhouse', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '780000'},
  {'Location': ['38.879186', '-77.208118'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '205000'},
  {'Location': ['38.904484', '-77.185967'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1595000'},
  {'Location': ['38.8714908', '-77.176613'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '674900'},
  {'Location': ['38.877884', '-77.194502'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '205000'},
  {'Location': ['38.877747', '-77.172466'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '765000'},
  {'Location': ['38.8962812', '-77.1985'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1550000'},
  {'Location': ['38.8421461', '-77.120112'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '235000'},
  {'Location': ['38.8422637', '-77.11688'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '299900'},
  {'Location': ['38.8772553', '-77.210164'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '369900'},
  {'Location': ['38.8939513', '-77.186293'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '735000'},
  {'Location': ['38.8643295', '-77.172983'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '617000'},
  {'Location': ['38.8923193', '-77.18201'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '1417000'},
  {'Location': ['38.8842133', '-77.175903'], 'Property_Type': 'Townhouse', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '490000'},
  {'Location': ['38.910231', '-77.178025'], 'Property_Type': 'Townhouse', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '659900'},
  {'Location': ['38.8601127', '-77.171186'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '774999'},
  {'Location': ['38.8525791', '-77.149707'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '875000'},
  {'Location': ['38.8830723', '-77.176566'], 'Property_Type': 'Townhouse', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '639900'},
  {'Location': ['38.8974535', '-77.201465'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '875000'},
  {'Location': ['38.911503', '-77.205287'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1575000'},
  {'Location': ['38.863306', '-77.208985'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '422500'},
  {'Location': ['38.8604408', '-77.185697'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '800000'},
  {'Location': ['38.8686668', '-77.183451'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '299000'},
  {'Location': ['38.8591895', '-77.146491'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '186000'},
  {'Location': ['38.919298', '-77.199354'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '625000'},
  {'Location': ['38.8992854', '-77.207738'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '244000'},
  {'Location': ['38.84292', '-77.113766'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '255000'},
  {'Location': ['38.8863562', '-77.177207'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '510000'},
  {'Location': ['38.8682834', '-77.222769'], 'Property_Type': 'Townhouse', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '499900'},
  {'Location': ['38.8813907', '-77.219925'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1395000'},
  {'Location': ['38.869882', '-77.232833'], 'Property_Type': 'Townhouse', 'City': 'Fairfax', 'Zip_Code': '22031', 'Price': '799900'},
  {'Location': ['38.8646839', '-77.171969'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '715000'},
  {'Location': ['38.8592272', '-77.143975'], 'Property_Type': 'Townhouse', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '449900'},
  {'Location': ['38.8768765', '-77.19668'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '375000'},
  {'Location': ['38.8985458', '-77.205488'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '195000'},
  {'Location': ['38.8766352', '-77.210536'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '369900'},
  {'Location': ['38.872915', '-77.215683'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '280000'},
  {'Location': ['38.8583856', '-77.148882'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '199900'},
  {'Location': ['38.8641887', '-77.136544'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22044', 'Price': '199000'},
  {'Location': ['38.8617721', '-77.142467'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22044', 'Price': '1100000'},
  {'Location': ['38.87365', '-77.23372'], 'Property_Type': 'Townhouse', 'City': 'Merrifield', 'Zip_Code': '22116', 'Price': '1039295'},
  {'Location': ['38.875957', '-77.194313'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '225000'},
  {'Location': ['38.8963761', '-77.209303'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1450000'},
  {'Location': ['38.864228', '-77.141426'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22044', 'Price': '799000'},
  {'Location': ['38.844074', '-77.143251'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '4890000'},
  {'Location': ['38.8543555', '-77.127769'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '250000'},
  {'Location': ['38.919479', '-77.198815'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1254000'},
  {'Location': ['38.8931995', '-77.205463'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '894500'},
  {'Location': ['38.8583866', '-77.143118'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '323000'},
  {'Location': ['38.8793436', '-77.166064'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '1200000'},
  {'Location': ['38.8573169', '-77.168805'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22044', 'Price': '680000'},
  {'Location': ['38.9210923', '-77.198343'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1239000'},
  {'Location': ['38.8629017', '-77.134725'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22044', 'Price': '235000'},
  {'Location': ['38.9141768', '-77.211436'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1350000'},
  {'Location': ['38.8790651', '-77.158874'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '1599000'},
  {'Location': ['38.8902742', '-77.180576'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '1649900'},
  {'Location': ['38.87556', '-77.175029'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '259000'},
  {'Location': ['38.8432966', '-77.130146'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '474900'},
  {'Location': ['38.9163045', '-77.207905'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '650000'},
  {'Location': ['38.8985458', '-77.205488'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '198000'},
  {'Location': ['38.84292', '-77.113766'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '329000'},
  {'Location': ['38.8419396', '-77.143375'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '445000'},
  {'Location': ['38.872915', '-77.215683'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '299000'},
  {'Location': ['38.8880437', '-77.199893'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '1675000'},
  {'Location': ['38.8681921', '-77.187854'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '685500'},
  {'Location': ['38.897295', '-77.186905'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '574000'},
  {'Location': ['38.8692066', '-77.221781'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '299900'},
  {'Location': ['38.9074975', '-77.198276'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1475000'},
  {'Location': ['38.8973502', '-77.208674'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1290000'},
  {'Location': ['38.9077993', '-77.202711'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1595000'},
  {'Location': ['38.872326', '-77.221094'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '249900'},
  {'Location': ['38.8652773', '-77.184035'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '499990'},
  {'Location': ['38.8774107', '-77.195199'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '199999'},
  {'Location': ['38.9038173', '-77.165072'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1799999'},
  {'Location': ['38.8775899', '-77.209684'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '355000'},
  {'Location': ['38.9101059', '-77.199713'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '850000'},
  {'Location': ['38.9009108', '-77.213763'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '368900'},
  {'Location': ['38.9034096', '-77.20955'], 'Property_Type': 'Townhouse', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '793000'},
  {'Location': ['38.8585553', '-77.172713'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '675000'},
  {'Location': ['38.9047824', '-77.190819'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '2199888'},
  {'Location': ['38.8422614', '-77.116106'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '319000'},
  {'Location': ['38.8458676', '-77.167367'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '1299000'},
  {'Location': ['38.8878547', '-77.197467'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '1499900'},
  {'Location': ['38.84292', '-77.113766'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '250000'},
  {'Location': ['38.8836313', '-77.163458'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '1649000'},
  {'Location': ['38.8422539', '-77.116104'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '299000'},
  {'Location': ['38.9137835', '-77.191987'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1620000'},
  {'Location': ['38.8809828', '-77.18983'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '2100000'},
  {'Location': ['38.850665', '-77.167633'], 'Property_Type': 'Vacant Land', 'City': 'Falls Church', 'Zip_Code': '22044', 'Price': '1175000'},
  {'Location': ['38.8992854', '-77.207738'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '299900'},
  {'Location': ['38.8732631', '-77.171781'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '1490000'},
  {'Location': ['38.872092', '-77.227897'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '375000'},
  {'Location': ['38.841973', '-77.120213'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '248000'},
  {'Location': ['38.8594769', '-77.161323'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22044', 'Price': '1995000'},
  {'Location': ['38.8540722', '-77.194188'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '999900'},
  {'Location': ['38.8774296', '-77.208517'], 'Property_Type': 'Townhouse', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '899900'},
  {'Location': ['38.8651747', '-77.137586'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22044', 'Price': '250000'},
  {'Location': ['38.879451', '-77.196099'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '199999'},
  {'Location': ['38.8487997', '-77.178195'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '1895000'},
  {'Location': ['38.847741', '-77.172107'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22044', 'Price': '1398999'},  
  {'Location': ['38.8621031', '-77.144517'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22044', 'Price': '1075000'},
  {'Location': ['38.9121556', '-77.210224'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1399500'},
  {'Location': ['38.9131229', '-77.211706'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '614900'},
  {'Location': ['38.8762654', '-77.178824'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '629990'},
  {'Location': ['38.8559944', '-77.196019'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '798999'},
  {'Location': ['38.8774846', '-77.162419'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '1499990'},
  {'Location': ['38.8382238', '-77.166198'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '664000'},
  {'Location': ['38.9009108', '-77.213763'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '379000'},
  {'Location': ['38.9140057', '-77.197961'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1199000'},
  {'Location': ['38.870904', '-77.159273'], 'Property_Type': 'Townhouse', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '620000'},
  {'Location': ['38.8983709', '-77.174949'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '1695000'},
  {'Location': ['38.8888037', '-77.196973'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '1625000'},
  {'Location': ['38.9120848', '-77.20416'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1189000'},
  {'Location': ['38.870755', '-77.233671'], 'Property_Type': 'Townhouse', 'City': 'Merrifield', 'Zip_Code': '22116', 'Price': '1019100'},
  {'Location': ['38.8757477', '-77.19585'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '795500'},
  {'Location': ['38.875845', '-77.149797'], 'Property_Type': 'Single Family Residential', 'City': 'Arlington', 'Zip_Code': '22205', 'Price': '2300000'},
  {'Location': ['38.8568917', '-77.183766'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '1950000'},
  {'Location': ['38.9173718', '-77.206226'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '590000'},
  {'Location': ['38.8703689', '-77.221585'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '289900'},
  {'Location': ['38.9074379', '-77.189067'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1334950'},
  {'Location': ['38.8422614', '-77.116106'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '299999'},
  {'Location': ['38.9199688', '-77.201779'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1498000'},
  {'Location': ['38.895573', '-77.193813'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1599999'},
  {'Location': ['38.8989735', '-77.176847'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '1675000'},
  {'Location': ['38.9042326', '-77.163503'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1895000'},
  {'Location': ['38.9104131', '-77.211886'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1590000'},
  {'Location': ['38.8824503', '-77.184488'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '1795000'},
  {'Location': ['38.8842333', '-77.193424'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '1725000'},
  {'Location': ['38.9112037', '-77.193334'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '649000'},
  {'Location': ['38.9103753', '-77.194188'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22043', 'Price': '1150000'},
  {'Location': ['38.898372', '-77.184397'], 'Property_Type': 'Vacant Land', 'City': 'Falls Church', 'Zip_Code': '22046', 'Price': '474900'},
  {'Location': ['38.851629', '-77.128929'], 'Property_Type': 'Vacant Land', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '950000'},
  {'Location': ['38.841973', '-77.120213'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '257000'},
  {'Location': ['38.8577839', '-77.200117'], 'Property_Type': 'Single Family Residential', 'City': 'Falls Church', 'Zip_Code': '22042', 'Price': '849999'},
  {'Location': ['38.8437982', '-77.114403'], 'Property_Type': 'Condo/Co-op', 'City': 'Falls Church', 'Zip_Code': '22041', 'Price': '220000'},
];

//Create the Housing pins and Layer
var Housing_Group = [];

for (var i = 0; i < marker.length; i++) {
  var listing = marker[i];
  Housing_Group.push(
    L.marker(listing.Location)
      .bindPopup("<h1>" + listing.Property_Type + "</h1> <hr> <h3>Price " + listing.Price + "</h3>")  
  )
}
var Housing_Group_Layer = L.layerGroup(Housing_Group);

//Create Light Layer
var light = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
})

//Create Dark Layer
var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "dark-v10",
accessToken: API_KEY
});

var baseMaps = {
  Light: light,
  Dark: dark,
};

var overlayMaps = {
  Houses: Housing_Group_Layer,
};

var myMap = L.map("map", {
  center: [38.9072, -77.0369],
  zoom: 15,
  layers: [light, dark]
}); 

L.control.layers(baseMaps, overlayMaps).addTo(myMap);

L.polyline(Alexandria, {
  color: "red",
}).addTo(myMap);

L.polyline(Falls_Church, {
  color: "blue",
}).addTo(myMap);

L.polyline(Arlington, {
  color: "green"
}).addTo(myMap);

function changeMap() {
  var dropdownMenu = d3.select('#selDataset').node().value;
  console.log(dropdownMenu)
  if (dropdownMenu == "Townhouse") {
    Townhouse(dropdownMenu)
  }
  else if (dropdownMenu == "Single-Family") {
    Single_Family(dropdownMenu)
  }
  else if (dropdownMenu == "Condo/Co-Op") {
    Condo(dropdownMenu)
  }
  else if (dropdownMenu == "Alexandria") {
    Alexandria_Map(dropdownMenu)
  }
  else if (dropdownMenu == "Falls Church") {
    Falls_Church_Map(dropdownMenu)
  }
  else if (dropdownMenu == "Arlington") {
    Arlington_Map(dropdownMenu)
  }
  else if (dropdownMenu == "Alexandria/Townhouse")  {

  }
}

function Townhouse(dropdownMenu) {
  var Updated_Housing_Group = [];
  for (var i = 0; i < marker.length; i++) {
    var listing = marker[i];
    if (listing.Property_Type == "Townhouse") {
      Updated_Housing_Group.push(
        L.marker(listing.Location)
          .bindPopup("<h1>" + listing.Property_Type + "</h1> <hr> <h3>Price " + listing.Price + "</h3>")  
      )
    }
  }
  var Housing_Group_Layer = L.layerGroup(Updated_Housing_Group);
  var overlayMaps = {
    Houses: Housing_Group_Layer,
  };
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
}

function Single_Family(dropdownMenu) {
  var Updated_Housing_Group = [];
  for (var i = 0; i < marker.length; i++) {
    var listing = marker[i];
    if (listing.Property_Type == "Single Family Residential") {
      Updated_Housing_Group.push(
        L.marker(listing.Location)
          .bindPopup("<h1>" + listing.Property_Type + "</h1> <hr> <h3>Price " + listing.Price + "</h3>")  
      )
    }
  }
  var Housing_Group_Layer = L.layerGroup(Updated_Housing_Group);
  var overlayMaps = {
    Houses: Housing_Group_Layer,
  };
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
} 

function Condo(dropdownMenu) {
  var Updated_Housing_Group = [];
  for (var i = 0; i < marker.length; i++) {
    var listing = marker[i];
    if (listing.Property_Type == "Condo/Co-op") {
      Updated_Housing_Group.push(
        L.marker(listing.Location)
          .bindPopup("<h1>" + listing.Property_Type + "</h1> <hr> <h3>Price " + listing.Price + "</h3>")  
      )
    }
  }
  var Housing_Group_Layer = L.layerGroup(Updated_Housing_Group);
  var overlayMaps = {
    Houses: Housing_Group_Layer,
  };
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
}

function Alexandria(dropdownMenu) {
  var Updated_Housing_Group = [];
  for (var i = 0; i < marker.length; i++) {
    var listing = marker[i];
    if (listing.Property_Type == "Townhouse") {
      Updated_Housing_Group.push(
        L.marker(listing.Location)
          .bindPopup("<h1>" + listing.Property_Type + "</h1> <hr> <h3>Price " + listing.Price + "</h3>")  
      )
    }
  }
  var Housing_Group_Layer = L.layerGroup(Updated_Housing_Group);
  var overlayMaps = {
    Houses: Housing_Group_Layer,
  };
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
}

function Alexandria(dropdownMenu) {
  var Updated_Housing_Group = [];
  for (var i = 0; i < marker.length; i++) {
    var listing = marker[i];
    if (listing.Property_Type == "Townhouse") {
      Updated_Housing_Group.push(
        L.marker(listing.Location)
          .bindPopup("<h1>" + listing.Property_Type + "</h1> <hr> <h3>Price " + listing.Price + "</h3>")  
      )
    }
  }
  var Housing_Group_Layer = L.layerGroup(Updated_Housing_Group);
  var overlayMaps = {
    Houses: Housing_Group_Layer,
  };
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
}

function Single_Family(dropdownMenu) {
  var Updated_Housing_Group = [];
  for (var i = 0; i < marker.length; i++) {
    var listing = marker[i];
    if (listing.Property_Type == "Single Family Residential") {
      Updated_Housing_Group.push(
        L.marker(listing.Location)
          .bindPopup("<h1>" + listing.Property_Type + "</h1> <hr> <h3>Price " + listing.Price + "</h3>")  
      )
    }
  }
  var Housing_Group_Layer = L.layerGroup(Updated_Housing_Group);
  var overlayMaps = {
    Houses: Housing_Group_Layer,
  };
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
} 

function Alexandria_Map(dropdownMenu) {
  var Updated_Housing_Group = [];
  for (var i = 0; i < marker.length; i++) {
    var listing = marker[i];
    if (listing.City == "Alexandria") {
      Updated_Housing_Group.push(
        L.marker(listing.Location)
          .bindPopup("<h1>" + listing.Property_Type + "</h1> <hr> <h3>Price " + listing.Price + "</h3>")  
      )
    }
  }
  var Housing_Group_Layer = L.layerGroup(Updated_Housing_Group);
  var overlayMaps = {
    Houses: Housing_Group_Layer,
  };
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
}

function Falls_Church_Map(dropdownMenu) {
  var Updated_Housing_Group = [];
  for (var i = 0; i < marker.length; i++) {
    var listing = marker[i];
    if (listing.City == "Falls Church") {
      Updated_Housing_Group.push(
        L.marker(listing.Location)
          .bindPopup("<h1>" + listing.Property_Type + "</h1> <hr> <h3>Price " + listing.Price + "</h3>")  
      )
    }
  }
  var Housing_Group_Layer = L.layerGroup(Updated_Housing_Group);
  var overlayMaps = {
    Houses: Housing_Group_Layer,
  };
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
}

function Arlington_Map(dropdownMenu) {
  var Updated_Housing_Group = [];
  for (var i = 0; i < marker.length; i++) {
    var listing = marker[i];
    if (listing.City == "Arlington") {
      Updated_Housing_Group.push(
        L.marker(listing.Location)
          .bindPopup("<h1>" + listing.Property_Type + "</h1> <hr> <h3>Price " + listing.Price + "</h3>")  
      )
    }
  }
  var Housing_Group_Layer = L.layerGroup(Updated_Housing_Group);
  var overlayMaps = {
    Houses: Housing_Group_Layer,
  };
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
}



d3.select("#selDataset").on("change", changeMap);
