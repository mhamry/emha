<?php
$hasil = [];

if (isset($_POST['generate'])) {
    $slug = trim($_POST['slug']);
    $list = trim($_POST['tamu']);

    $tamu = explode("\n", $list);

    foreach ($tamu as $nama) {
        $nama = trim($nama);
        if ($nama !== "") {
            $hasil[] = [
                'nama' => $nama,
                'link' => "https://emhaundangan.id/order/$slug/?to=" . urlencode($nama)
            ];
        }
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Generate Link Undangan</title>
    <style>
        body { font-family: Arial; padding: 20px; }
        textarea { width: 100%; height: 150px; }
        input, button { padding: 8px; margin-top: 10px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ccc; padding: 8px; }
        th { background: #f4f4f4; }
    </style>
</head>
<body>

<h2>Generate Link Tamu Undangan</h2>

<form method="post">
    <label>Slug Undangan (nama folder)</label><br>
    <input type="text" name="slug" placeholder="alan-laila" required><br>

    <label>Daftar Tamu (1 nama per baris)</label><br>
    <textarea name="tamu" placeholder="Pak Budi&#10;Ibu Sari&#10;Keluarga Andi"></textarea><br>

    <button type="submit" name="generate">Generate Link</button>
</form>

<?php if (!empty($hasil)): ?>
<h3>Hasil Link</h3>
<table>
    <tr>
        <th>Nama Tamu</th>
        <th>Link Undangan</th>
    </tr>
    <?php foreach ($hasil as $row): ?>
    <tr>
        <td><?= htmlspecialchars($row['nama']) ?></td>
        <td>
            <input type="text" value="<?= $row['link'] ?>" style="width:100%" onclick="this.select()">
        </td>
    </tr>
    <?php endforeach; ?>
</table>
<?php endif; ?>

</body>
</html>
