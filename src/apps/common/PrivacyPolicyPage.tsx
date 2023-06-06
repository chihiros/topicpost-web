import React from "react";

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="mx-3">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">ビジネスの詳細</h2>
          <p>このウェブサイト（以下、「サービス」）は個人、硯川千優によって運営されています。サービス名はTopicPostです。</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">収集する情報</h2>
          <p>このサービスでは、ユーザー名、メールアドレス、IPアドレスを収集します。これらの情報は、ユーザーが登録またはログインするときに自動的に収集されます。</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">情報収集の目的</h2>
          <p>収集した情報は、サービス向上、ユーザーサポート、および警察などの法執行機関からの正当な照会への対応のために利用します。具体的には、問題の解決、サービスの改善、犯罪の防止などに活用します。</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">情報の共有</h2>
          <p>ユーザーの個人情報は、警察の正式な照会があった場合を除き、第三者と共有することはありません。ただし、合法的な要請があった場合、またはユーザーが違法行為を行ったと疑われる場合は、法律に従い情報を共有することがあります。</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">ユーザーの権利</h2>
          <p>ユーザーは自身の情報についてアクセス、修正、削除の権利を有します。ユーザーが情報の修正や削除を希望する場合は、ユーザーサポートまでご連絡ください。なお、情報を削除した場合でも、法律で義務付けられている期間は保存します。</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">情報の保管とセキュリティ</h2>
          <p>ユーザーから提供された情報は、SupabaseのPostgresにて管理されています。Supabaseは、情報のセキュリティを確保するために、適切な物理的、電子的、管理的手段を使用しております。</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">クッキーと追跡技術</h2>
          <p>このサービスではクッキーの収集は行わないことをお知らせします。しかし、将来的にユーザー体験を改善するためにクッキーを利用する可能性があります。その場合は改めて通知し、ユーザーの同意を得ます。</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">子どものプライバシー</h2>
          <p>サービスの対象年齢は13歳以上です。18歳未満のユーザーは親の同意が必要となります。親の同意がない場合、当該ユーザーの情報は削除します。</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">ポリシーの変更</h2>
          <p>本ポリシーは随時更新されることがあります。更新があった場合、本サイト上にて適切に通知します。ポリシーの変更は、公表後すぐに効力を発揮します。</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">法的要件</h2>
          <p>本サービスは日本の法律に準拠し、日本国内で提供されます。ユーザーは、使用する際に日本の法律に従うものとします。また、法律上必要な場合、ユーザー情報は法律に従って提供されます。</p>
        </div>
      </div>
    </div>
  );
}
