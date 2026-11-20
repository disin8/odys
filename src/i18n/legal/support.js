const mail = '[dmitry8.work@gmail.com](mailto:dmitry8.work@gmail.com?subject=Odys%20Travel%20support)';
const refunds = '[reportaproblem.apple.com](https://reportaproblem.apple.com/)';

export const supportDoc = {
  en: {
    kicker: 'Developer support',
    title: 'Odys Travel Support',
    meta: [mail],
    blocks: [
      { h: 'Contact', p: [
        `Email ${mail} with the App version (Settings → About), iPhone model, iOS version, and what you expected versus what happened.`,
        'Support is provided by the independent developer on a best-effort basis. It is not a service-level agreement and does not set a response time. It does not remove rights you have under consumer law or under Apple’s refund process. Developer, not Apple, provides this support. Apple has no obligation to support the App.',
      ] },
      { h: 'Photos', ul: [
        'The map is built from dates and GPS stored in photos and videos. The scan runs on the iPhone. Photo files are not uploaded.',
        'Grant access in **Settings > Privacy & Security > Photos > Odys Travel**. Limited access only sees the photos you selected, so places can be missing. Use Select more photos or Allow full access.',
        'Screenshots, shared images, and files without location metadata will not place a visit.',
        'Settings → Scan my photos again rebuilds the on-device index.',
      ] },
      { h: 'iCloud', ul: [
        'Sync is off until you turn on Sync with iCloud and restart the App. You must already be signed in to iCloud.',
        'Sync covers places, trips, notes, and the wishlist. Photos and the photo index stay on the device.',
        'Developer cannot open your iCloud data or restore it. If you need a copy you control, use Export.',
      ] },
      { h: 'Export, import, and delete', ul: [
        'Settings → Export can make a JSON backup, CSV, KML, or GPX. You choose where the file goes.',
        'Settings → Import places merges a JSON backup. It does not delete existing places.',
        'Delete all data erases visited places and the photo index on that iPhone. It does not delete photos from the Photos library. This cannot be undone by the developer.',
      ] },
      { h: 'App lock and the map', ul: [
        'Face ID is optional. iOS performs it. If it fails, use the device passcode.',
        'Borders, cities, distances, and stay lengths are estimates. The App is a journal, not an official record.',
        'The home-screen widget shows a local summary. It does not add a network account.',
      ] },
      { h: 'Purchases', p: [`The App does not currently sell in-app purchases or subscriptions. If that changes, the price will be shown in the App before you pay, and any refund will go through Apple at ${refunds}.`] },
      { h: 'Policies', p: ['[Privacy Policy](/odys/privacy/) · [Terms of Use (EULA)](/odys/terms/)', '**Dmitry Sinkevich**', mail] },
    ],
  },
  ja: {
    kicker: '開発者サポート',
    title: 'Odys Travel サポート',
    meta: [mail],
    blocks: [
      { h: '連絡', p: [
        `${mail} に、アプリのバージョン（設定 → 情報）、iPhone の機種、iOS のバージョン、期待したことと実際の結果を書いて送ってください。`,
        'サポートは独立した開発者が最善の範囲で提供します。サービス水準の合意ではなく、返答期限も定めません。消費者法や Apple の返金手続き上の権利は奪いません。サポートを提供するのは開発者であり、Apple ではありません。Apple に本アプリを支援する義務はありません。',
      ] },
      { h: '写真', ul: [
        '地図は写真とビデオに保存された日時と GPS から作ります。スキャンは iPhone 上で行われ、写真ファイルはアップロードされません。',
        '**設定 > プライバシーとセキュリティ > 写真 > Odys Travel** でアクセスを許可してください。制限付きアクセスは選んだ写真だけを見るため、場所が欠けることがあります。「ほかの写真を選択」またはフルアクセスを使ってください。',
        'スクリーンショット、共有画像、位置情報のないファイルでは訪問地は付きません。',
        '設定 → 写真を再スキャンすると、端末内の索引を作り直します。',
      ] },
      { h: 'iCloud', ul: [
        'iCloud と同期をオンにしてアプリを再起動するまで、同期はオフです。すでに iCloud にサインインしている必要があります。',
        '同期されるのは場所、旅行、メモ、ウィッシュリストです。写真と写真索引は端末に残ります。',
        '開発者は iCloud のデータを開いたり復元したりできません。手元にコピーが必要なら書き出しを使ってください。',
      ] },
      { h: '書き出し、読み込み、削除', ul: [
        '設定 → 書き出しで JSON バックアップ、CSV、KML、GPX を作れます。保存先はあなたが選びます。',
        '設定 → 場所を読み込むは JSON バックアップをマージします。既存の場所は消しません。',
        'すべてのデータを削除すると、その iPhone の訪問地と写真索引が消えます。写真ライブラリの写真は消えません。開発者は元に戻せません。',
      ] },
      { h: 'アプリロックと地図', ul: [
        'Face ID は任意です。実行するのは iOS です。失敗したらデバイスのパスコードを使ってください。',
        '境界、都市、距離、滞在日数は推定です。アプリは日記であり、公式の記録ではありません。',
        'ホーム画面のウィジェットは端末内の要約を表示します。ネットワークアカウントは追加しません。',
      ] },
      { h: '購入', p: [`現在、アプリ内購入やサブスクリプションはありません。将来追加される場合、支払う前に価格がアプリ内に表示され、返金は Apple の ${refunds} を通じて行われます。`] },
      { h: 'ポリシー', p: ['[プライバシーポリシー](/odys/privacy/) · [利用規約（EULA）](/odys/terms/)', '**Dmitry Sinkevich**', mail] },
    ],
  },
  zh: {
    kicker: '开发者支持',
    title: 'Odys Travel 支持',
    meta: [mail],
    blocks: [
      { h: '联系', p: [
        `请发邮件至 ${mail}，写上应用版本（设置 → 关于）、iPhone 型号、iOS 版本，以及你期望的结果和实际发生的情况。`,
        '支持由独立开发者尽最大努力提供。这不是服务级别协议，也不规定回复时间。它不取消你在消费者法律或 Apple 退款流程下的权利。提供支持的是开发者，不是 Apple。Apple 没有义务支持本应用。',
      ] },
      { h: '照片', ul: [
        '地图根据照片和视频中的日期与 GPS 生成。扫描在 iPhone 上进行。照片文件不会上传。',
        '请在 **设置 > 隐私与安全性 > 照片 > Odys Travel** 中授权。有限访问只能看到你选中的照片，因此地点可能缺失。请使用“选择更多照片”或允许完全访问。',
        '截图、分享的图片，以及没有位置信息的文件不会标出到访。',
        '设置 → 重新扫描我的照片会重建设备上的索引。',
      ] },
      { h: 'iCloud', ul: [
        '在你打开“与 iCloud 同步”并重新启动应用之前，同步是关闭的。你必须已经登录 iCloud。',
        '同步包括地点、行程、笔记和心愿单。照片和照片索引留在设备上。',
        '开发者无法打开或恢复你的 iCloud 数据。如果你需要自己掌握的副本，请使用导出。',
      ] },
      { h: '导出、导入和删除', ul: [
        '设置 → 导出可以生成 JSON 备份、CSV、KML 或 GPX。文件去向由你选择。',
        '设置 → 导入地点会合并 JSON 备份。它不会删除已有地点。',
        '删除全部数据会清除这台 iPhone 上的到访地点和照片索引。不会删除照片图库中的照片。开发者无法撤销。',
      ] },
      { h: '应用锁和地图', ul: [
        'Face ID 是可选的。由 iOS 执行。如果失败，请使用设备密码。',
        '边界、城市、距离和停留时长是估计值。本应用是日记，不是官方记录。',
        '主屏幕小组件显示本地摘要。它不会增加网络账号。',
      ] },
      { h: '购买', p: [`本应用目前不销售 App 内购买或订阅。如果以后增加，付款前会在应用中显示价格，退款通过 Apple 的 ${refunds} 处理。`] },
      { h: '政策', p: ['[隐私政策](/odys/privacy/) · [使用条款（EULA）](/odys/terms/)', '**Dmitry Sinkevich**', mail] },
    ],
  },
  ko: {
    kicker: '개발자 지원',
    title: 'Odys Travel 지원',
    meta: [mail],
    blocks: [
      { h: '연락', p: [
        `${mail} 로 앱 버전(설정 → 정보), iPhone 모델, iOS 버전, 기대한 것과 실제로 일어난 일을 적어 보내 주세요.`,
        '지원은 독립 개발자가 최선을 다해 제공합니다. 서비스 수준 약정이 아니며 응답 시간을 정하지 않습니다. 소비자법이나 Apple 환불 절차상의 권리를 없애지 않습니다. 지원은 Apple이 아니라 개발자가 제공합니다. Apple은 이 앱을 지원할 의무가 없습니다.',
      ] },
      { h: '사진', ul: [
        '지도는 사진과 비디오에 저장된 날짜와 GPS로 만듭니다. 스캔은 iPhone에서 실행됩니다. 사진 파일은 업로드되지 않습니다.',
        '**설정 > 개인정보 보호 및 보안 > 사진 > Odys Travel**에서 접근을 허용하세요. 제한된 접근은 선택한 사진만 보므로 장소가 빠질 수 있습니다. 사진 더 선택 또는 전체 접근을 사용하세요.',
        '스크린샷, 공유 이미지, 위치 정보가 없는 파일은 방문지로 잡히지 않습니다.',
        '설정 → 사진 다시 스캔은 기기 안의 색인을 다시 만듭니다.',
      ] },
      { h: 'iCloud', ul: [
        'iCloud와 동기화를 켜고 앱을 다시 시작할 때까지 동기화는 꺼져 있습니다. 이미 iCloud에 로그인되어 있어야 합니다.',
        '동기화 대상은 장소, 여행, 메모, 위시리스트입니다. 사진과 사진 색인은 기기에 남습니다.',
        '개발자는 iCloud 데이터를 열거나 복구할 수 없습니다. 직접 보관할 사본이 필요하면 내보내기를 사용하세요.',
      ] },
      { h: '내보내기, 가져오기, 삭제', ul: [
        '설정 → 내보내기로 JSON 백업, CSV, KML, GPX를 만들 수 있습니다. 파일 위치는 사용자가 고릅니다.',
        '설정 → 장소 가져오기는 JSON 백업을 합칩니다. 기존 장소를 지우지 않습니다.',
        '모든 데이터 삭제는 그 iPhone의 방문 장소와 사진 색인을 지웁니다. 사진 보관함의 사진은 지우지 않습니다. 개발자는 되돌릴 수 없습니다.',
      ] },
      { h: '앱 잠금과 지도', ul: [
        'Face ID는 선택 사항입니다. 수행은 iOS가 합니다. 실패하면 기기 암호를 사용하세요.',
        '경계, 도시, 거리, 체류 기간은 추정치입니다. 앱은 일기이지 공식 기록이 아닙니다.',
        '홈 화면 위젯은 기기의 요약을 보여 줍니다. 네트워크 계정을 추가하지 않습니다.',
      ] },
      { h: '구매', p: [`현재 앱 내 구입이나 구독은 판매하지 않습니다. 나중에 생기면 결제 전에 앱에 가격이 표시되고, 환불은 Apple의 ${refunds} 를 통합니다.`] },
      { h: '정책', p: ['[개인정보 처리방침](/odys/privacy/) · [이용약관 (EULA)](/odys/terms/)', '**Dmitry Sinkevich**', mail] },
    ],
  },
  ru: {
    kicker: 'Поддержка разработчика',
    title: 'Поддержка Odys Travel',
    meta: [mail],
    blocks: [
      { h: 'Контакт', p: [
        `Напишите на ${mail}: версия приложения (Настройки → О приложении), модель iPhone, версия iOS и что вы ожидали по сравнению с тем, что произошло.`,
        'Поддержку оказывает независимый разработчик по мере возможности. Это не соглашение об уровне сервиса и не устанавливает срок ответа. Это не отменяет прав по закону о защите потребителей и по процедуре возврата Apple. Поддержку оказывает разработчик, не Apple. У Apple нет обязанности поддерживать приложение.',
      ] },
      { h: 'Фото', ul: [
        'Карта строится по дате и GPS из фото и видео. Сканирование идёт на iPhone. Файлы фото не загружаются.',
        'Доступ даётся в **Настройки > Конфиденциальность и безопасность > Фото > Odys Travel**. Ограниченный доступ видит только выбранные фото, поэтому места могут отсутствовать. Выберите ещё фото или полный доступ.',
        'Снимки экрана, пересланные изображения и файлы без геометки не создают посещение.',
        'Настройки → Сканировать фото снова пересобирает индекс на устройстве.',
      ] },
      { h: 'iCloud', ul: [
        'Синхронизация выключена, пока вы не включите синхронизацию с iCloud и не перезапустите приложение. Нужно уже быть вошедшим в iCloud.',
        'Синхронизируются места, поездки, заметки и список желаний. Фото и фотоиндекс остаются на устройстве.',
        'Разработчик не может открыть или восстановить данные iCloud. Если нужна копия под вашим контролем, используйте экспорт.',
      ] },
      { h: 'Экспорт, импорт и удаление', ul: [
        'Настройки → Экспорт создаёт резервную копию JSON, CSV, KML или GPX. Куда отправится файл, выбираете вы.',
        'Настройки → Импорт мест объединяет резервную копию JSON. Существующие места не удаляются.',
        'Удалить все данные стирает посещённые места и фотоиндекс на этом iPhone. Фото из медиатеки не удаляются. Разработчик не может это отменить.',
      ] },
      { h: 'Блокировка и карта', ul: [
        'Face ID необязателен. Проверку выполняет iOS. Если она не проходит, используйте код-пароль устройства.',
        'Границы, города, расстояния и длительность пребывания — оценки. Приложение — дневник, а не официальная запись.',
        'Виджет на экране «Домой» показывает локальную сводку. Сетевой аккаунт он не добавляет.',
      ] },
      { h: 'Покупки', p: [`Сейчас приложение не продаёт встроенные покупки и подписки. Если это изменится, цена будет показана в приложении до оплаты, а возврат пойдёт через Apple: ${refunds}.`] },
      { h: 'Документы', p: ['[Политика приватности](/odys/privacy/) · [Условия использования (EULA)](/odys/terms/)', '**Dmitry Sinkevich**', mail] },
    ],
  },
  de: {
    kicker: 'Support durch den Entwickler',
    title: 'Odys Travel Support',
    meta: [mail],
    blocks: [
      { h: 'Kontakt', p: [
        `Schreib an ${mail} und nenne die App-Version (Einstellungen → Info), das iPhone-Modell, die iOS-Version und was du erwartet hast gegenüber dem, was passiert ist.`,
        'Support leistet der unabhängige Entwickler nach bestem Bemühen. Das ist keine Service-Vereinbarung und setzt keine Antwortzeit. Rechte aus Verbraucherrecht oder dem Erstattungsverfahren von Apple bleiben bestehen. Den Support gibt der Entwickler, nicht Apple. Apple ist nicht verpflichtet, die App zu unterstützen.',
      ] },
      { h: 'Fotos', ul: [
        'Die Karte entsteht aus Datum und GPS in Fotos und Videos. Der Scan läuft auf dem iPhone. Fotodateien werden nicht hochgeladen.',
        'Zugriff erteilst du unter **Einstellungen > Datenschutz & Sicherheit > Fotos > Odys Travel**. Eingeschränkter Zugriff sieht nur die ausgewählten Fotos, deshalb können Orte fehlen. Wähle weitere Fotos oder vollen Zugriff.',
        'Bildschirmfotos, geteilte Bilder und Dateien ohne Standortdaten setzen keinen Besuch.',
        'Einstellungen → Fotos erneut scannen baut den Index auf dem Gerät neu.',
      ] },
      { h: 'iCloud', ul: [
        'Die Synchronisierung ist aus, bis du Mit iCloud synchronisieren einschaltest und die App neu startest. Du musst bereits bei iCloud angemeldet sein.',
        'Synchronisiert werden Orte, Reisen, Notizen und die Wunschliste. Fotos und der Fotoindex bleiben auf dem Gerät.',
        'Der Entwickler kann deine iCloud-Daten nicht öffnen oder wiederherstellen. Wenn du eine Kopie unter deiner Kontrolle brauchst, nutze den Export.',
      ] },
      { h: 'Export, Import und Löschen', ul: [
        'Einstellungen → Export kann ein JSON-Backup, CSV, KML oder GPX erzeugen. Wohin die Datei geht, entscheidest du.',
        'Einstellungen → Orte importieren führt ein JSON-Backup zusammen. Vorhandene Orte werden nicht gelöscht.',
        'Alle Daten löschen entfernt besuchte Orte und den Fotoindex auf diesem iPhone. Fotos in der Mediathek werden nicht gelöscht. Der Entwickler kann das nicht rückgängig machen.',
      ] },
      { h: 'App-Sperre und Karte', ul: [
        'Face ID ist optional. iOS führt die Prüfung aus. Wenn sie scheitert, nutze den Gerätecode.',
        'Grenzen, Städte, Strecken und Aufenthaltsdauer sind Schätzungen. Die App ist ein Tagebuch, keine amtliche Aufzeichnung.',
        'Das Widget auf dem Home-Bildschirm zeigt eine lokale Zusammenfassung. Es fügt kein Netzkonto hinzu.',
      ] },
      { h: 'Käufe', p: [`Die App verkauft derzeit keine In-App-Käufe oder Abos. Falls sich das ändert, wird der Preis vor der Zahlung in der App gezeigt, und eine Erstattung läuft über Apple unter ${refunds}.`] },
      { h: 'Richtlinien', p: ['[Datenschutz](/odys/privacy/) · [Nutzungsbedingungen (EULA)](/odys/terms/)', '**Dmitry Sinkevich**', mail] },
    ],
  },
  es: {
    kicker: 'Soporte del desarrollador',
    title: 'Soporte de Odys Travel',
    meta: [mail],
    blocks: [
      { h: 'Contacto', p: [
        `Escribe a ${mail} con la versión de la app (Ajustes → Información), el modelo de iPhone, la versión de iOS y qué esperabas frente a lo que ocurrió.`,
        'El soporte lo presta el desarrollador independiente en la medida de lo posible. No es un acuerdo de nivel de servicio ni fija un plazo de respuesta. No elimina los derechos que tengas por la normativa de consumo o por el proceso de reembolso de Apple. El soporte lo da el desarrollador, no Apple. Apple no tiene obligación de dar soporte a la app.',
      ] },
      { h: 'Fotos', ul: [
        'El mapa se construye con las fechas y el GPS de fotos y vídeos. El análisis se ejecuta en el iPhone. Los archivos de foto no se suben.',
        'Concede el acceso en **Ajustes > Privacidad y seguridad > Fotos > Odys Travel**. El acceso limitado solo ve las fotos que seleccionaste, así que pueden faltar lugares. Usa Seleccionar más fotos o Permitir acceso completo.',
        'Las capturas, las imágenes compartidas y los archivos sin metadatos de ubicación no sitúan una visita.',
        'Ajustes → Volver a analizar mis fotos reconstruye el índice en el dispositivo.',
      ] },
      { h: 'iCloud', ul: [
        'La sincronización está desactivada hasta que actives Sincronizar con iCloud y reinicies la app. Tienes que haber iniciado sesión en iCloud.',
        'La sincronización cubre lugares, viajes, notas y la lista de deseos. Las fotos y el índice permanecen en el dispositivo.',
        'El desarrollador no puede abrir ni restaurar tus datos de iCloud. Si necesitas una copia bajo tu control, usa Exportar.',
      ] },
      { h: 'Exportar, importar y borrar', ul: [
        'Ajustes → Exportar puede crear una copia JSON, CSV, KML o GPX. Tú eliges adónde va el archivo.',
        'Ajustes → Importar lugares combina una copia JSON. No borra los lugares existentes.',
        'Eliminar todos los datos borra los lugares visitados y el índice de fotos en ese iPhone. No borra las fotos de la fototeca. El desarrollador no puede deshacerlo.',
      ] },
      { h: 'Bloqueo y mapa', ul: [
        'Face ID es opcional. Lo ejecuta iOS. Si falla, usa el código del dispositivo.',
        'Fronteras, ciudades, distancias y duraciones de estancia son estimaciones. La app es un diario, no un registro oficial.',
        'El widget de la pantalla de inicio muestra un resumen local. No añade una cuenta de red.',
      ] },
      { h: 'Compras', p: [`La app no vende ahora compras dentro de la app ni suscripciones. Si eso cambia, el precio se mostrará en la app antes de pagar, y cualquier reembolso pasará por Apple en ${refunds}.`] },
      { h: 'Políticas', p: ['[Política de privacidad](/odys/privacy/) · [Condiciones de uso (EULA)](/odys/terms/)', '**Dmitry Sinkevich**', mail] },
    ],
  },
  fr: {
    kicker: 'Assistance du développeur',
    title: 'Assistance Odys Travel',
    meta: [mail],
    blocks: [
      { h: 'Contact', p: [
        `Écrivez à ${mail} avec la version de l’app (Réglages → À propos), le modèle d’iPhone, la version d’iOS, et ce que vous attendiez par rapport à ce qui s’est passé.`,
        'L’assistance est fournie par le développeur indépendant dans la mesure du possible. Ce n’est pas un accord de niveau de service et cela ne fixe pas de délai de réponse. Cela ne retire pas les droits que vous avez au titre du droit de la consommation ou de la procédure de remboursement d’Apple. C’est le développeur, et non Apple, qui fournit cette assistance. Apple n’a aucune obligation d’assister l’app.',
      ] },
      { h: 'Photos', ul: [
        'La carte est construite à partir des dates et du GPS des photos et des vidéos. L’analyse s’exécute sur l’iPhone. Les fichiers photo ne sont pas envoyés.',
        'Autorisez l’accès dans **Réglages > Confidentialité et sécurité > Photos > Odys Travel**. L’accès limité ne voit que les photos sélectionnées, donc des lieux peuvent manquer. Utilisez Sélectionner plus de photos ou Autoriser l’accès complet.',
        'Les captures d’écran, les images partagées et les fichiers sans métadonnées de lieu ne placent pas de visite.',
        'Réglages → Analyser à nouveau mes photos reconstruit l’index sur l’appareil.',
      ] },
      { h: 'iCloud', ul: [
        'La synchronisation est désactivée tant que vous n’activez pas Synchroniser avec iCloud et que vous ne redémarrez pas l’app. Vous devez déjà être connecté à iCloud.',
        'La synchronisation couvre les lieux, voyages, notes et la liste d’envies. Les photos et l’index restent sur l’appareil.',
        'Le développeur ne peut pas ouvrir ni restaurer vos données iCloud. Si vous avez besoin d’une copie que vous contrôlez, utilisez Exporter.',
      ] },
      { h: 'Export, import et suppression', ul: [
        'Réglages → Exporter peut créer une sauvegarde JSON, un CSV, un KML ou un GPX. Vous choisissez où va le fichier.',
        'Réglages → Importer des lieux fusionne une sauvegarde JSON. Les lieux existants ne sont pas supprimés.',
        'Supprimer toutes les données efface les lieux visités et l’index photo sur cet iPhone. Les photos de la photothèque ne sont pas supprimées. Le développeur ne peut pas annuler cela.',
      ] },
      { h: 'Verrouillage et carte', ul: [
        'Face ID est facultatif. iOS l’exécute. En cas d’échec, utilisez le code de l’appareil.',
        'Frontières, villes, distances et durées de séjour sont des estimations. L’app est un journal, pas un document officiel.',
        'Le widget de l’écran d’accueil affiche un résumé local. Il n’ajoute pas de compte réseau.',
      ] },
      { h: 'Achats', p: [`L’app ne vend pas actuellement d’achats intégrés ni d’abonnements. Si cela change, le prix sera affiché dans l’app avant le paiement, et tout remboursement passera par Apple sur ${refunds}.`] },
      { h: 'Politiques', p: ['[Politique de confidentialité](/odys/privacy/) · [Conditions d’utilisation (EULA)](/odys/terms/)', '**Dmitry Sinkevich**', mail] },
    ],
  },
};
