import Icon from "@/components/ui/icon";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AuthLayout = ({ title, subtitle, children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Steam-style card */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
          {/* Header with Steam branding */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
            <div className="flex justify-center mb-3">
              <Icon name="Gamepad2" className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">{title}</h1>
            <p className="text-blue-100 text-sm">{subtitle}</p>
          </div>

          {/* Form content */}
          <div className="p-6">{children}</div>

          {/* Footer */}
          <div className="bg-slate-800 px-6 py-4 border-t border-slate-700">
            <p className="text-xs text-slate-400 text-center">
              Защищенное соединение • Steam Authentication
            </p>
          </div>
        </div>

        {/* Security notice */}
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-400">
            🔒 Ваши данные обрабатываются безопасно
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
