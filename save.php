<?php
  $filename = $_GET["filename"];
  @ $fp = fopen("exports/".$filename, "wb");
  if (!$fp) {
    echo "<p><strong>Cannot generate message file</strong></p></body></html>";
    exit;
  } else {
    $outputstring = $_GET["outputstring"];
    fwrite($fp, $outputstring);
    Echo "Message inserted";
  }
?>
