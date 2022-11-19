echo 'generating tests';
for($i = 0; $i < 100000; ++$i) {
    if($i % 2500 === 0) echo '.';
    $test_cases[] = [
        random_bytes
