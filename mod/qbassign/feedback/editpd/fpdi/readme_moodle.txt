FPDI
==================================

No changes from the upstream version have been made. Both FPDI and FPDF_TPL have
been downloaded and unzipped to this directory.

Information
-----------

URL: http://www.setasign.de/products/pdf-php-solutions/fpdi/
Download from: http://www.setasign.de/products/pdf-php-solutions/fpdi/downloads
Documentation: http://www.setasign.de/products/pdf-php-solutions/fpdi/manuals/
License: The MIT License (MIT)

Installation
------------
1) Download the latest version of fpdi from the url above.
2) Unzip the src directory files into this directory.
3) Update mod/qbassign/feedback/editpd/fpdi/Tcpdf/Fpdi.php(or whichever file it has been replaced with) to extend 'pdf' instead of 'TCPDF'.
4) Make a note below of any changes made.

2021/05/26
----------
1/ Updated to 2.3.6

Updated by Paul Holden (MDL-71717)

2020/12/16
----------
1/ Updated to 2.3.5

Updated by Paul Holden (MDL-70312)

2019/06/18
----------
1/ Updated to 2.2.0
2/ Amended the installation instructions
3/ Updated pdf.php to inherit from the TCPDF version instead of the FPDI generic version
   (Refer https://manuals.setasign.com/fpdi-manual/v2/migrating/#index-4)
4/ Updated pdf.php to account for function changes
   (Refer https://manuals.setasign.com/fpdi-manual/v2/migrating/#index-6)
5/ With the restructure by fpdi, no need to apply patches from MDL-55848 and MDL-60301

Updated by Peter Dias (MDL-65774)

2017/10/03
----------
1/ Updated to 1.6.2
2/ Cherry-picked changes in MDL-55848.
3/ Renamed 'TCPDF' to 'pdf' as stated above.
4/ Applied php7.2 compatibility fix, remove this if it is fixed in next major release (2.0) (MDL-60301).

Updated by Ankit Agarwal<ankit.agrr@gmail.com> (MDL-60301)

2016/11/15
----------

1) Class not exists check and the empty fpdi_bridge class has been removed from fpdi_bridge.php to fix a behat error.

Updated by Simey Lameze (MDL-55848)

2015/12/04
----------
Updated to FPDI: 1.6.1

1) Changed 'TCPDF' to 'pdf' (as stated above).
2) License changed from Apache Software License 2.0 to The MIT License (MIT).

2015/10/01
----------
Updated to FPDI: 1.5.4

fpdi no longer uses fpdi2tcpdf_bridge.php this has been replaced with fpdi_bridge.php.
fpdi_bridge.php has been modified to extend pdf (lib/pdflib.php) as was done with
fpdi2tcpdf_bridge.php.

Updated by Adrian Greeve (MDL-49515)

------------------
Previous versions:

FPDI: 1.4.4
FPDF_TPL: 1.2.3
