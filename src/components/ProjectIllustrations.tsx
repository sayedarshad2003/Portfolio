import React from 'react';

interface IllustrationProps {
  id: string;
  className?: string;
}

export const ProjectIllustration: React.FC<IllustrationProps> = ({ id, className = "w-full h-full" }) => {
  switch (id) {
    case 'crystal-pos':
      return (
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="800" height="500" fill="#0E0E10" />
          {/* Subtle grid background */}
          <defs>
            <pattern id="grid-pos" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1A1A1E" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="800" height="500" fill="url(#grid-pos)" />

          {/* POS Terminal Frame */}
          <rect x="60" y="50" width="460" height="330" rx="10" fill="#141417" stroke="#27272A" strokeWidth="2" />
          <rect x="75" y="65" width="430" height="300" rx="6" fill="#0A0A0C" />

          {/* Top terminal bar */}
          <rect x="90" y="80" width="400" height="32" rx="4" fill="#18181C" />
          <circle cx="106" cy="96" r="4" fill="#FF4800" />
          <text x="120" y="100" fill="#E4E4E7" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="0.05em">CRYSTAL_POS // TERMINAL_01 [OMN_OMR / VAT_05%]</text>
          <text x="440" y="100" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">ONLINE</text>

          {/* Checkout Table header */}
          <rect x="90" y="125" width="400" height="24" fill="#141416" />
          <text x="100" y="141" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">SKU / DESCRIPTION</text>
          <text x="280" y="141" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">QTY</text>
          <text x="350" y="141" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">RATE</text>
          <text x="430" y="141" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">TOTAL</text>

          {/* Items */}
          <text x="100" y="172" fill="#F4F4F5" fontSize="11" fontFamily="var(--font-sans)">Omani Frankincense Premium (عطر اللبان)</text>
          <text x="285" y="172" fill="#D4D4D8" fontSize="11" fontFamily="var(--font-mono)">02</text>
          <text x="350" y="172" fill="#D4D4D8" fontSize="11" fontFamily="var(--font-mono)">18.500</text>
          <text x="430" y="172" fill="#F4F4F5" fontSize="11" fontFamily="var(--font-mono)">37.000</text>

          <text x="100" y="202" fill="#F4F4F5" fontSize="11" fontFamily="var(--font-sans)">Silk Scarf - Handloom (شال حرير)</text>
          <text x="285" y="202" fill="#D4D4D8" fontSize="11" fontFamily="var(--font-mono)">01</text>
          <text x="350" y="202" fill="#D4D4D8" fontSize="11" fontFamily="var(--font-mono)">24.000</text>
          <text x="430" y="202" fill="#F4F4F5" fontSize="11" fontFamily="var(--font-mono)">24.000</text>

          <line x1="90" y1="225" x2="490" y2="225" stroke="#27272A" strokeWidth="1" strokeDasharray="3 3" />

          {/* Totals */}
          <text x="100" y="250" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">SUBTOTAL (EXCL. VAT)</text>
          <text x="430" y="250" fill="#D4D4D8" fontSize="11" fontFamily="var(--font-mono)">61.000</text>

          <text x="100" y="272" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">OMAN VAT (5.00%)</text>
          <text x="430" y="272" fill="#FF4800" fontSize="11" fontFamily="var(--font-mono)">03.050</text>

          <rect x="90" y="290" width="400" height="40" rx="4" fill="#141418" stroke="#3F3F46" strokeWidth="1" />
          <text x="104" y="315" fill="#F4F4F5" fontSize="12" fontWeight="600" fontFamily="var(--font-mono)">TOTAL NET PAYABLE</text>
          <text x="415" y="315" fill="#FF4800" fontSize="15" fontWeight="700" fontFamily="var(--font-mono)">64.050 OMR</text>

          {/* Barcode scanner beam */}
          <rect x="90" y="340" width="400" height="15" rx="2" fill="#18181D" />
          <line x1="100" y1="347" x2="480" y2="347" stroke="#FF4800" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="190" y1="347" x2="260" y2="347" stroke="#FFFFFF" strokeWidth="2" />

          {/* Thermal Receipt Stand (Right Side) */}
          <rect x="545" y="90" width="195" height="310" rx="8" fill="#161619" stroke="#27272A" strokeWidth="1.5" />
          <rect x="560" y="110" width="165" height="24" rx="3" fill="#222227" />
          <text x="575" y="126" fill="#A1A1AA" fontSize="9" fontFamily="var(--font-mono)">PAYMOB GATEWAY // SYNCED</text>

          {/* Thermal Receipt Paper */}
          <rect x="560" y="145" width="165" height="235" rx="3" fill="#F4F4F5" />
          <text x="600" y="170" fill="#0A0A0C" fontSize="10" fontWeight="700" fontFamily="var(--font-mono)">METFLORA POS</text>
          <text x="590" y="184" fill="#52525B" fontSize="8" fontFamily="var(--font-mono)">TAX INVOICE / فاتورة ضريبية</text>
          <line x1="570" y1="192" x2="715" y2="192" stroke="#D4D4D8" strokeWidth="1" strokeDasharray="2 2" />
          <text x="572" y="206" fill="#18181B" fontSize="8" fontFamily="var(--font-mono)">TRN: 104829104810</text>
          <text x="572" y="220" fill="#18181B" fontSize="8" fontFamily="var(--font-mono)">DATE: 2024-03-12</text>
          <text x="572" y="234" fill="#18181B" fontSize="8" fontFamily="var(--font-mono)">PAYMENT: PAYMOB VISA</text>

          <rect x="572" y="246" width="140" height="22" fill="#E4E4E7" />
          <text x="576" y="260" fill="#0A0A0C" fontSize="9" fontWeight="700" fontFamily="var(--font-mono)">PAID: 64.050 OMR</text>

          {/* Barcode on receipt */}
          <rect x="572" y="280" width="140" height="30" fill="#0A0A0C" rx="2" />
          <line x1="580" y1="285" x2="580" y2="305" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="586" y1="285" x2="586" y2="305" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="592" y1="285" x2="592" y2="305" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="600" y1="285" x2="600" y2="305" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="608" y1="285" x2="608" y2="305" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="616" y1="285" x2="616" y2="305" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="626" y1="285" x2="626" y2="305" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="635" y1="285" x2="635" y2="305" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="645" y1="285" x2="645" y2="305" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="655" y1="285" x2="655" y2="305" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="666" y1="285" x2="666" y2="305" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="675" y1="285" x2="675" y2="305" stroke="#FFFFFF" strokeWidth="3" />
          <line x1="685" y1="285" x2="685" y2="305" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="695" y1="285" x2="695" y2="305" stroke="#FFFFFF" strokeWidth="2" />
          <text x="600" y="325" fill="#71717A" fontSize="7" fontFamily="var(--font-mono)">*941374736502*</text>

          {/* Bottom hardware stand reflection */}
          <path d="M220 380 L360 380 L390 440 L190 440 Z" fill="#18181D" stroke="#27272A" strokeWidth="1" />
          <rect x="150" y="440" width="280" height="15" rx="3" fill="#222227" />

          {/* Metric stamp */}
          <rect x="545" y="420" width="195" height="35" rx="4" fill="#121215" stroke="#FF4800" strokeWidth="1" strokeOpacity="0.4" />
          <text x="560" y="442" fill="#FF4800" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600">QUERY LATENCY: -40%</text>
        </svg>
      );

    case 'gamezone-management':
      return (
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="800" height="500" fill="#0B0B0E" />
          {/* SignalR broadcast waves */}
          <circle cx="400" cy="220" r="140" stroke="#222228" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="400" cy="220" r="220" stroke="#1A1A22" strokeWidth="1" strokeDasharray="6 6" />

          {/* Header Panel */}
          <rect x="50" y="40" width="700" height="48" rx="6" fill="#131317" stroke="#27272A" strokeWidth="1" />
          <circle cx="75" cy="64" r="5" fill="#FF4800" />
          <text x="92" y="68" fill="#F4F4F5" fontSize="12" fontFamily="var(--font-mono)" fontWeight="600">SIGNALR_HUB // LIVE OCCUPANCY STREAM</text>
          <text x="540" y="68" fill="#71717A" fontSize="11" fontFamily="var(--font-mono)">WEBSOCKETS: CONNECTED (18ms)</text>

          {/* Station pods matrix */}
          {/* Pod 1 */}
          <rect x="50" y="110" width="215" height="150" rx="8" fill="#141418" stroke="#3F3F46" strokeWidth="1" />
          <rect x="65" y="125" width="185" height="24" rx="4" fill="#1C1C22" />
          <text x="75" y="141" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono)">STATION_01 [VIP PS5]</text>
          <rect x="210" y="131" width="30" height="12" rx="2" fill="#FF4800" />
          <text x="215" y="140" fill="#000000" fontSize="8" fontWeight="700" fontFamily="var(--font-mono)">LIVE</text>
          <text x="75" y="175" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">ACTIVE SESSION</text>
          <text x="75" y="198" fill="#FF4800" fontSize="18" fontWeight="700" fontFamily="var(--font-mono)">01:42:18</text>
          <text x="75" y="222" fill="#A1A1AA" fontSize="10" fontFamily="var(--font-mono)">RATE: 3.500 OMR/HR</text>
          <text x="75" y="240" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">STATUS: AUTO-BILLING</text>

          {/* Pod 2 */}
          <rect x="292" y="110" width="215" height="150" rx="8" fill="#141418" stroke="#FF4800" strokeWidth="1.5" />
          <rect x="307" y="125" width="185" height="24" rx="4" fill="#241414" />
          <text x="317" y="141" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono)">STATION_02 [SIMULATOR]</text>
          <rect x="445" y="131" width="36" height="12" rx="2" fill="#E11D48" />
          <text x="448" y="140" fill="#FFFFFF" fontSize="8" fontWeight="700" fontFamily="var(--font-mono)">OVERTIME</text>
          <text x="317" y="175" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">OVERTIME SURCHARGE</text>
          <text x="317" y="198" fill="#E11D48" fontSize="18" fontWeight="700" fontFamily="var(--font-mono)">+00:14:32</text>
          <text x="317" y="222" fill="#A1A1AA" fontSize="10" fontFamily="var(--font-mono)">SURCHARGE: +1.200 OMR</text>
          <text x="317" y="240" fill="#FF4800" fontSize="9" fontFamily="var(--font-mono)">CALCULATING OVERDUE...</text>

          {/* Pod 3 */}
          <rect x="535" y="110" width="215" height="150" rx="8" fill="#141418" stroke="#3F3F46" strokeWidth="1" />
          <rect x="550" y="125" width="185" height="24" rx="4" fill="#1C1C22" />
          <text x="560" y="141" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono)">STATION_03 [PC RIG 07]</text>
          <rect x="690" y="131" width="35" height="12" rx="2" fill="#71717A" />
          <text x="694" y="140" fill="#000000" fontSize="8" fontWeight="700" fontFamily="var(--font-mono)">HOLD</text>
          <text x="560" y="175" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">PAUSED / BREAK</text>
          <text x="560" y="198" fill="#D4D4D8" fontSize="18" fontWeight="700" fontFamily="var(--font-mono)">00:45:00</text>
          <text x="560" y="222" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">TIMER SUSPENDED</text>
          <text x="560" y="240" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">RESUME READY</text>

          {/* Real-time Telemetry Monitor Lower Row */}
          <rect x="50" y="285" width="700" height="170" rx="8" fill="#111114" stroke="#27272A" strokeWidth="1" />
          <text x="75" y="315" fill="#A1A1AA" fontSize="11" fontFamily="var(--font-mono)">LIVE TRANSACTION & STATE TRANSITION BUS (SIGNALR CLIENT EVENT STREAM)</text>

          {/* Event Log Lines */}
          <line x1="75" y1="330" x2="725" y2="330" stroke="#1F1F24" strokeWidth="1" />
          <text x="75" y="352" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">14:22:01.041</text>
          <text x="175" y="352" fill="#FF4800" fontSize="10" fontFamily="var(--font-mono)">STATION_02</text>
          <text x="270" y="352" fill="#E4E4E7" fontSize="10" fontFamily="var(--font-mono)">Threshold exceeded (01:00:00). Auto-triggered overtime tariff @ 0.08 OMR/min</text>

          <text x="75" y="382" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">14:21:49.882</text>
          <text x="175" y="382" fill="#60A5FA" fontSize="10" fontFamily="var(--font-mono)">HUB_BROADCAST</text>
          <text x="270" y="382" fill="#E4E4E7" fontSize="10" fontFamily="var(--font-mono)">Station 03 toggled state: ACTIVE -&gt; PAUSED (Hold ticket #4910)</text>

          <text x="75" y="412" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">14:20:12.115</text>
          <text x="175" y="412" fill="#34D399" fontSize="10" fontFamily="var(--font-mono)">BILLING_COMMIT</text>
          <text x="270" y="412" fill="#E4E4E7" fontSize="10" fontFamily="var(--font-mono)">Station 05 checkout complete. Settlement 5.250 OMR written to SQL Server</text>

          <text x="75" y="440" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">LATENCY: 0.04s · SYNC RATIO: 100% · CLIENT SUBSCRIBERS: 14 TERMINALS</text>
        </svg>
      );

    case 'lims-diagnostics':
      return (
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="800" height="500" fill="#0C0D0F" />
          <defs>
            <pattern id="grid-lims" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#16171B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="800" height="500" fill="url(#grid-lims)" />

          {/* Specimen Tracking Flow */}
          <rect x="50" y="40" width="700" height="420" rx="8" fill="#121316" stroke="#27272A" strokeWidth="1.5" />

          <rect x="70" y="60" width="660" height="34" rx="4" fill="#1A1B20" />
          <circle cx="88" cy="77" r="4" fill="#FF4800" />
          <text x="102" y="81" fill="#F4F4F5" fontSize="11" fontFamily="var(--font-mono)">LIMS CORE // SPECIMEN VERIFICATION & ITEXTSHARP PDF PIPELINE</text>
          <text x="590" y="81" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">CLINICAL AUDIT: ISO 15189</text>

          {/* Left: Barcode Sample Rack */}
          <rect x="70" y="115" width="220" height="325" rx="6" fill="#16171B" stroke="#2C2D33" strokeWidth="1" />
          <text x="90" y="142" fill="#A1A1AA" fontSize="11" fontFamily="var(--font-mono)">SPECIMEN INTAKE</text>

          {/* Sample Vials */}
          <rect x="90" y="160" width="180" height="60" rx="4" fill="#1E2026" stroke="#3F3F46" strokeWidth="1" />
          <line x1="95" y1="172" x2="95" y2="208" stroke="#FF4800" strokeWidth="3" />
          <text x="110" y="180" fill="#FFFFFF" fontSize="10" fontFamily="var(--font-mono)">ID: OMN-LAB-8942</text>
          <text x="110" y="196" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">WHOLE BLOOD / EDTA</text>
          <text x="110" y="210" fill="#34D399" fontSize="8" fontFamily="var(--font-mono)">QC STATUS: PASSED</text>

          <rect x="90" y="235" width="180" height="60" rx="4" fill="#1E2026" stroke="#3F3F46" strokeWidth="1" />
          <line x1="95" y1="247" x2="95" y2="283" stroke="#FF4800" strokeWidth="3" />
          <text x="110" y="255" fill="#FFFFFF" fontSize="10" fontFamily="var(--font-mono)">ID: OMN-LAB-8943</text>
          <text x="110" y="271" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">SERUM LIPID PANEL</text>
          <text x="110" y="285" fill="#34D399" fontSize="8" fontFamily="var(--font-mono)">QC STATUS: ANALYZED</text>

          <rect x="90" y="310" width="180" height="60" rx="4" fill="#1E2026" stroke="#3F3F46" strokeWidth="1" />
          <line x1="95" y1="322" x2="95" y2="358" stroke="#71717A" strokeWidth="3" />
          <text x="110" y="330" fill="#A1A1AA" fontSize="10" fontFamily="var(--font-mono)">ID: OMN-LAB-8944</text>
          <text x="110" y="346" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">URINE BIOCHEMISTRY</text>
          <text x="110" y="360" fill="#EAB308" fontSize="8" fontFamily="var(--font-mono)">QC STATUS: IN QUEUE</text>

          <text x="90" y="415" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">BARCODE SCANNER: 2D MATRIX</text>

          {/* Middle: Analysis & QC Parameters */}
          <rect x="310" y="115" width="220" height="325" rx="6" fill="#16171B" stroke="#2C2D33" strokeWidth="1" />
          <text x="330" y="142" fill="#A1A1AA" fontSize="11" fontFamily="var(--font-mono)">ANALYZER QC METRICS</text>

          <rect x="330" y="160" width="180" height="50" rx="4" fill="#1A1C22" />
          <text x="340" y="178" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">HEMOGLOBIN (Hb)</text>
          <text x="340" y="198" fill="#FFFFFF" fontSize="14" fontWeight="600" fontFamily="var(--font-mono)">14.8 g/dL</text>
          <text x="440" y="198" fill="#34D399" fontSize="9" fontFamily="var(--font-mono)">NORMAL</text>

          <rect x="330" y="225" width="180" height="50" rx="4" fill="#1A1C22" />
          <text x="340" y="243" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">GLUCOSE FASTING</text>
          <text x="340" y="263" fill="#FFFFFF" fontSize="14" fontWeight="600" fontFamily="var(--font-mono)">92 mg/dL</text>
          <text x="440" y="263" fill="#34D399" fontSize="9" fontFamily="var(--font-mono)">NORMAL</text>

          <rect x="330" y="290" width="180" height="50" rx="4" fill="#1A1C22" />
          <text x="340" y="308" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">TRIGLYCERIDES</text>
          <text x="340" y="328" fill="#FF4800" fontSize="14" fontWeight="600" fontFamily="var(--font-mono)">185 mg/dL</text>
          <text x="440" y="328" fill="#FF4800" fontSize="9" fontFamily="var(--font-mono)">ELEVATED</text>

          {/* Right: Automated iTextSharp PDF Report Preview */}
          <rect x="550" y="115" width="180" height="325" rx="6" fill="#F4F4F5" />
          <rect x="565" y="130" width="150" height="15" fill="#18181B" />
          <text x="572" y="141" fill="#FFFFFF" fontSize="8" fontWeight="700" fontFamily="var(--font-mono)">DIAGNOSTIC REPORT</text>

          <line x1="565" y1="155" x2="715" y2="155" stroke="#E4E4E7" strokeWidth="1" />
          <text x="568" y="172" fill="#52525B" fontSize="7" fontFamily="var(--font-mono)">PATIENT: 40182-OMN</text>
          <text x="568" y="185" fill="#52525B" fontSize="7" fontFamily="var(--font-mono)">PHYSICIAN: DR. K. AL-HINAI</text>

          <rect x="565" y="195" width="150" height="120" fill="#EFEFEF" rx="3" />
          <line x1="570" y1="210" x2="710" y2="210" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="570" y1="230" x2="710" y2="230" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="570" y1="250" x2="710" y2="250" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="570" y1="270" x2="710" y2="270" stroke="#CBD5E1" strokeWidth="1" />

          {/* Barcode stamp on PDF */}
          <rect x="568" y="330" width="144" height="20" fill="#0F172A" />
          <text x="585" y="375" fill="#0F172A" fontSize="8" fontWeight="700" fontFamily="var(--font-mono)">iTextSharp // SIGNED</text>
          <circle cx="680" cy="380" r="10" fill="#FF4800" fillOpacity="0.2" stroke="#FF4800" strokeWidth="1" />
          <path d="M676 380 L679 383 L685 377" stroke="#FF4800" strokeWidth="1.5" />
        </svg>
      );

    case 'accounting-platform':
      return (
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="800" height="500" fill="#0C0C0E" />
          <rect x="50" y="40" width="700" height="420" rx="8" fill="#131317" stroke="#27272A" strokeWidth="1.5" />

          {/* Header */}
          <rect x="70" y="60" width="660" height="34" rx="4" fill="#1B1C22" />
          <circle cx="88" cy="77" r="4" fill="#FF4800" />
          <text x="102" y="81" fill="#F4F4F5" fontSize="11" fontFamily="var(--font-mono)">DOUBLE-ENTRY GENERAL LEDGER // VAT REGISTERS & TRIAL BALANCE</text>
          <text x="610" y="81" fill="#34D399" fontSize="10" fontFamily="var(--font-mono)">BALANCED (Δ = 0)</text>

          {/* Left: General Journal Entry Matrix */}
          <rect x="70" y="115" width="410" height="325" rx="6" fill="#16171C" stroke="#2C2D35" strokeWidth="1" />
          <text x="85" y="138" fill="#A1A1AA" fontSize="11" fontFamily="var(--font-mono)">JOURNAL VOUCHERS (AUTOMATED RECONCILIATION)</text>

          {/* Table Header */}
          <rect x="85" y="152" width="380" height="24" fill="#20222A" />
          <text x="95" y="168" fill="#A1A1AA" fontSize="9" fontFamily="var(--font-mono)">ACCOUNT CODE & NAME</text>
          <text x="280" y="168" fill="#A1A1AA" fontSize="9" fontFamily="var(--font-mono)">DEBIT (OMR)</text>
          <text x="380" y="168" fill="#A1A1AA" fontSize="9" fontFamily="var(--font-mono)">CREDIT (OMR)</text>

          {/* Row 1 */}
          <text x="95" y="196" fill="#F4F4F5" fontSize="10" fontFamily="var(--font-mono)">1010 - Bank Muscat Main Account</text>
          <text x="280" y="196" fill="#34D399" fontSize="10" fontFamily="var(--font-mono)">14,250.000</text>
          <text x="380" y="196" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">-</text>

          {/* Row 2 */}
          <text x="95" y="226" fill="#F4F4F5" fontSize="10" fontFamily="var(--font-mono)">4001 - Retail Sales Revenue</text>
          <text x="280" y="226" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">-</text>
          <text x="380" y="226" fill="#F4F4F5" fontSize="10" fontFamily="var(--font-mono)">13,571.428</text>

          {/* Row 3 */}
          <text x="95" y="256" fill="#F4F4F5" fontSize="10" fontFamily="var(--font-mono)">2200 - Output VAT Payable (5%)</text>
          <text x="280" y="256" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">-</text>
          <text x="380" y="256" fill="#FF4800" fontSize="10" fontFamily="var(--font-mono)">678.572</text>

          <line x1="85" y1="280" x2="465" y2="280" stroke="#2C2D35" strokeWidth="1" strokeDasharray="3 3" />

          {/* Totals Check */}
          <text x="95" y="306" fill="#A1A1AA" fontSize="10" fontWeight="600" fontFamily="var(--font-mono)">TOTAL VERIFICATION</text>
          <text x="280" y="306" fill="#34D399" fontSize="11" fontWeight="700" fontFamily="var(--font-mono)">14,250.000</text>
          <text x="380" y="306" fill="#34D399" fontSize="11" fontWeight="700" fontFamily="var(--font-mono)">14,250.000</text>

          <rect x="85" y="330" width="380" height="90" rx="4" fill="#1C1D24" />
          <text x="100" y="355" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">INVARIANT ENFORCEMENT</text>
          <text x="100" y="375" fill="#F4F4F5" fontSize="11" fontFamily="var(--font-mono)">Σ Debits === Σ Credits enforced via T-SQL CTEs</text>
          <text x="100" y="398" fill="#FF4800" fontSize="10" fontFamily="var(--font-mono)">Month-end closing cycle accelerated by automated pipelines</text>

          {/* Right: Export Pipeline (ClosedXML & iTextSharp) */}
          <rect x="500" y="115" width="230" height="325" rx="6" fill="#16171C" stroke="#2C2D35" strokeWidth="1" />
          <text x="518" y="138" fill="#A1A1AA" fontSize="11" fontFamily="var(--font-mono)">EXCEL / PDF EXPORT ENGINE</text>

          {/* ClosedXML Card */}
          <rect x="518" y="160" width="194" height="110" rx="5" fill="#1A1C22" stroke="#33353F" strokeWidth="1" />
          <rect x="530" y="175" width="28" height="28" rx="4" fill="#047857" />
          <text x="537" y="194" fill="#FFFFFF" fontSize="14" fontWeight="700" fontFamily="var(--font-mono)">X</text>
          <text x="568" y="188" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="var(--font-mono)">ClosedXML (.xlsx)</text>
          <text x="568" y="202" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">VAT Tax Return Workbooks</text>
          <line x1="530" y1="218" x2="700" y2="218" stroke="#27272A" strokeWidth="1" />
          <text x="530" y="236" fill="#A1A1AA" fontSize="9" fontFamily="var(--font-mono)">- Multi-sheet ledger aggregation</text>
          <text x="530" y="252" fill="#A1A1AA" fontSize="9" fontFamily="var(--font-mono)">- Formula preservation</text>

          {/* iTextSharp Card */}
          <rect x="518" y="285" width="194" height="110" rx="5" fill="#1A1C22" stroke="#33353F" strokeWidth="1" />
          <rect x="530" y="300" width="28" height="28" rx="4" fill="#DC2626" />
          <text x="537" y="319" fill="#FFFFFF" fontSize="14" fontWeight="700" fontFamily="var(--font-mono)">P</text>
          <text x="568" y="313" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="var(--font-mono)">iTextSharp (.pdf)</text>
          <text x="568" y="327" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">Trial Balance Financials</text>
          <line x1="530" y1="343" x2="700" y2="343" stroke="#27272A" strokeWidth="1" />
          <text x="530" y="361" fill="#A1A1AA" fontSize="9" fontFamily="var(--font-mono)">- Cryptographic sign-off</text>
          <text x="530" y="377" fill="#A1A1AA" fontSize="9" fontFamily="var(--font-mono)">- Strict Omani tax layout</text>

          <text x="518" y="420" fill="#71717A" fontSize="8" fontFamily="var(--font-mono)">ZERO MANUAL SPREADSHEET RECONCILIATION</text>
        </svg>
      );

    case 'hrms-platform':
      return (
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="800" height="500" fill="#0D0D10" />
          <rect x="50" y="40" width="700" height="420" rx="8" fill="#131317" stroke="#27272A" strokeWidth="1.5" />

          <rect x="70" y="60" width="660" height="34" rx="4" fill="#1B1C22" />
          <circle cx="88" cy="77" r="4" fill="#FF4800" />
          <text x="102" y="81" fill="#F4F4F5" fontSize="11" fontFamily="var(--font-mono)">HRMS ENTERPRISE // MULTI-BRANCH ATTENDANCE & PAYROLL MATRIX</text>
          <text x="610" y="81" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">BRANCHES: 08 ACTIVE</text>

          {/* Org Tree */}
          <rect x="70" y="115" width="290" height="325" rx="6" fill="#16171D" stroke="#282930" strokeWidth="1" />
          <text x="90" y="142" fill="#A1A1AA" fontSize="11" fontFamily="var(--font-mono)">MULTI-BRANCH RBAC HIERARCHY</text>

          <rect x="90" y="165" width="250" height="42" rx="4" fill="#1F2028" stroke="#3F3F46" strokeWidth="1" />
          <text x="105" y="184" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="var(--font-sans)">Muscat Corporate HQ</text>
          <text x="105" y="198" fill="#FF4800" fontSize="9" fontFamily="var(--font-mono)">ROLE: SUPER_ADMIN // ALL_ACCESS</text>

          <line x1="215" y1="207" x2="215" y2="230" stroke="#3F3F46" strokeWidth="1.5" />

          <rect x="90" y="230" width="250" height="42" rx="4" fill="#191A22" stroke="#2F3038" strokeWidth="1" />
          <text x="105" y="249" fill="#D4D4D8" fontSize="11" fontWeight="600" fontFamily="var(--font-sans)">Salalah Regional Branch</text>
          <text x="105" y="263" fill="#A1A1AA" fontSize="9" fontFamily="var(--font-mono)">ROLE: BRANCH_HR // SCOPED</text>

          <line x1="215" y1="272" x2="215" y2="295" stroke="#3F3F46" strokeWidth="1.5" />

          <rect x="90" y="295" width="250" height="42" rx="4" fill="#191A22" stroke="#2F3038" strokeWidth="1" />
          <text x="105" y="314" fill="#D4D4D8" fontSize="11" fontWeight="600" fontFamily="var(--font-sans)">Sohar Logistics Hub</text>
          <text x="105" y="328" fill="#A1A1AA" fontSize="9" fontFamily="var(--font-mono)">ROLE: BRANCH_HR // SCOPED</text>

          <text x="90" y="380" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">ASP.NET Core Authorization Middleware with Claims Transformation</text>

          {/* Right: Payroll & Attendance matrix */}
          <rect x="380" y="115" width="350" height="325" rx="6" fill="#16171D" stroke="#282930" strokeWidth="1" />
          <text x="400" y="142" fill="#A1A1AA" fontSize="11" fontFamily="var(--font-mono)">PAYROLL DISPATCH (TELERIK REPORTING ENGINE)</text>

          {/* Sample Payroll Row 1 */}
          <rect x="400" y="165" width="310" height="50" rx="4" fill="#1A1C24" />
          <text x="415" y="185" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-sans)">Hamad Al-Riyami</text>
          <text x="415" y="202" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">EMP #1094 · Operations</text>
          <text x="610" y="185" fill="#34D399" fontSize="11" fontFamily="var(--font-mono)">1,850.00 OMR</text>
          <text x="635" y="202" fill="#71717A" fontSize="8" fontFamily="var(--font-mono)">APPROVED</text>

          {/* Sample Payroll Row 2 */}
          <rect x="400" y="225" width="310" height="50" rx="4" fill="#1A1C24" />
          <text x="415" y="245" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-sans)">Fatima Al-Balushi</text>
          <text x="415" y="262" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">EMP #1098 · Logistics</text>
          <text x="610" y="245" fill="#34D399" fontSize="11" fontFamily="var(--font-mono)">1,420.00 OMR</text>
          <text x="635" y="262" fill="#71717A" fontSize="8" fontFamily="var(--font-mono)">APPROVED</text>

          {/* Sample Payroll Row 3 */}
          <rect x="400" y="285" width="310" height="50" rx="4" fill="#1A1C24" />
          <text x="415" y="305" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-sans)">Khalid Al-Maamari</text>
          <text x="415" y="322" fill="#71717A" fontSize="9" fontFamily="var(--font-mono)">EMP #1102 · Inventory</text>
          <text x="610" y="305" fill="#34D399" fontSize="11" fontFamily="var(--font-mono)">1,150.00 OMR</text>
          <text x="635" y="322" fill="#71717A" fontSize="8" fontFamily="var(--font-mono)">APPROVED</text>

          <rect x="400" y="350" width="310" height="65" rx="4" fill="#1D1714" stroke="#FF4800" strokeWidth="1" strokeOpacity="0.4" />
          <text x="415" y="372" fill="#FF4800" fontSize="10" fontFamily="var(--font-mono)">TELERIK REPORT PIPELINE: GENERATED 420 PAYSLIPS</text>
          <text x="415" y="395" fill="#A1A1AA" fontSize="9" fontFamily="var(--font-mono)">Automated leave balance reconciliation & overtime accruals</text>
        </svg>
      );

    case 'restaurant-qr-menu':
    default:
      return (
        <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="800" height="500" fill="#0B0B0D" />
          <rect x="50" y="40" width="700" height="420" rx="8" fill="#131316" stroke="#27272A" strokeWidth="1.5" />

          <rect x="70" y="60" width="660" height="34" rx="4" fill="#1A1B20" />
          <circle cx="88" cy="77" r="4" fill="#FF4800" />
          <text x="102" y="81" fill="#F4F4F5" fontSize="11" fontFamily="var(--font-mono)">CONTACTLESS QR & WEBSOCKET KITCHEN DISPATCH (KDS)</text>
          <text x="610" y="81" fill="#34D399" fontSize="10" fontFamily="var(--font-mono)">KDS: 0 LATENCY</text>

          {/* Left: Mobile phone mockup */}
          <rect x="80" y="115" width="220" height="325" rx="20" fill="#0A0A0C" stroke="#3F3F46" strokeWidth="2" />
          {/* Phone speaker notch */}
          <rect x="155" y="125" width="70" height="8" rx="4" fill="#27272A" />

          {/* QR code on screen */}
          <rect x="100" y="150" width="180" height="40" rx="4" fill="#19191E" />
          <text x="110" y="168" fill="#FFFFFF" fontSize="10" fontFamily="var(--font-mono)">TABLE #14 [TERRACE]</text>
          <text x="110" y="182" fill="#FF4800" fontSize="9" fontFamily="var(--font-mono)">QR SESSION: ACTIVE</text>

          {/* Menu items */}
          <rect x="100" y="200" width="180" height="55" rx="4" fill="#141418" stroke="#27272A" strokeWidth="1" />
          <text x="110" y="220" fill="#FFFFFF" fontSize="10" fontFamily="var(--font-sans)">Omani Shuwa Slider</text>
          <text x="110" y="235" fill="#71717A" fontSize="8" fontFamily="var(--font-mono)">Slow cooked 24 hrs</text>
          <text x="235" y="225" fill="#FF4800" fontSize="10" fontFamily="var(--font-mono)">4.500</text>

          <rect x="100" y="265" width="180" height="55" rx="4" fill="#141418" stroke="#27272A" strokeWidth="1" />
          <text x="110" y="285" fill="#FFFFFF" fontSize="10" fontFamily="var(--font-sans)">Pomegranate Cardamom Soda</text>
          <text x="110" y="300" fill="#71717A" fontSize="8" fontFamily="var(--font-mono)">Fresh mint & soda</text>
          <text x="235" y="290" fill="#FF4800" fontSize="10" fontFamily="var(--font-mono)">1.800</text>

          <rect x="100" y="335" width="180" height="45" rx="6" fill="#FF4800" />
          <text x="140" y="362" fill="#000000" fontSize="11" fontWeight="700" fontFamily="var(--font-mono)">ORDER SENT &gt;&gt;</text>
          <text x="115" y="405" fill="#71717A" fontSize="8" fontFamily="var(--font-mono)">WEBSOCKET DUPLEX ACTIVE</text>

          {/* Arrow dispatch indicator */}
          <path d="M315 270 L345 270" stroke="#FF4800" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="345,266 355,270 345,274" fill="#FF4800" />

          {/* Right: Kitchen Display System (KDS) */}
          <rect x="365" y="115" width="365" height="325" rx="6" fill="#16171B" stroke="#2C2D35" strokeWidth="1" />
          <text x="385" y="140" fill="#A1A1AA" fontSize="11" fontFamily="var(--font-mono)">KITCHEN TICKETING SYSTEM (INSTANT PUSH NOTIFICATION)</text>

          {/* Ticket 1 */}
          <rect x="385" y="160" width="160" height="150" rx="4" fill="#1D1E24" stroke="#FF4800" strokeWidth="1.5" />
          <rect x="385" y="160" width="160" height="24" rx="4" fill="#FF4800" />
          <text x="395" y="176" fill="#000000" fontSize="10" fontWeight="700" fontFamily="var(--font-mono)">TICKET #42 · TBL 14</text>
          <text x="395" y="200" fill="#F4F4F5" fontSize="10" fontFamily="var(--font-mono)">01x Shuwa Slider</text>
          <text x="395" y="215" fill="#A1A1AA" fontSize="9" fontFamily="var(--font-mono)">-- Extra hot sauce</text>
          <text x="395" y="235" fill="#F4F4F5" fontSize="10" fontFamily="var(--font-mono)">01x Pomegranate Soda</text>
          <line x1="395" y1="250" x2="535" y2="250" stroke="#33353F" strokeWidth="1" />
          <text x="395" y="270" fill="#FF4800" fontSize="10" fontFamily="var(--font-mono)">ELAPSED: 00:01:14</text>
          <text x="395" y="295" fill="#34D399" fontSize="9" fontFamily="var(--font-mono)">STATUS: PREPPING</text>

          {/* Ticket 2 */}
          <rect x="560" y="160" width="155" height="150" rx="4" fill="#1D1E24" stroke="#33353F" strokeWidth="1" />
          <rect x="560" y="160" width="155" height="24" rx="4" fill="#2C2D35" />
          <text x="570" y="176" fill="#D4D4D8" fontSize="10" fontWeight="600" fontFamily="var(--font-mono)">TICKET #41 · TBL 08</text>
          <text x="570" y="200" fill="#A1A1AA" fontSize="10" fontFamily="var(--font-mono)">02x Grilled Seabass</text>
          <text x="570" y="220" fill="#A1A1AA" fontSize="10" fontFamily="var(--font-mono)">01x Hummus Trio</text>
          <line x1="570" y1="250" x2="705" y2="250" stroke="#33353F" strokeWidth="1" />
          <text x="570" y="270" fill="#A1A1AA" fontSize="10" fontFamily="var(--font-mono)">ELAPSED: 00:08:42</text>
          <text x="570" y="295" fill="#38BDF8" fontSize="9" fontFamily="var(--font-mono)">STATUS: DISPATCHED</text>

          <rect x="385" y="325" width="330" height="85" rx="4" fill="#131418" />
          <text x="400" y="350" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">WEBSOCKET EVENT PIPELINE</text>
          <text x="400" y="372" fill="#E4E4E7" fontSize="10" fontFamily="var(--font-mono)">Patron places order -&gt; ASP.NET Core WebSocket Hub -&gt; Push to KDS tablet</text>
          <text x="400" y="394" fill="#34D399" fontSize="9" fontFamily="var(--font-mono)">Average round-trip kitchen arrival time &lt; 80 milliseconds</text>
        </svg>
      );
  }
};
