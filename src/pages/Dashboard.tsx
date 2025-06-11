import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const Dashboard = () => {
  const [cookies, setCookies] = useState<string>("");
  const [hasPermission, setHasPermission] = useState(false);

  const requestCookies = () => {
    try {
      const allCookies = document.cookie;
      setCookies(allCookies || "Нет доступных cookies");
      setHasPermission(true);
      toast.success("Cookies успешно получены!");
    } catch (error) {
      toast.error("Ошибка при получении cookies");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Icon name="Trophy" className="h-16 w-16 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🎉 Добро пожаловать!
          </h1>
          <p className="text-xl text-gray-600">Вы успешно вошли через Steam</p>
        </div>

        {/* User Info Card */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="User" className="h-5 w-5" />
              Информация о пользователе
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Steam ID</p>
                <p className="font-semibold">76561198000000000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Имя пользователя</p>
                <p className="font-semibold">SteamUser</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Статус</p>
                <p className="font-semibold text-green-600">Онлайн</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Уровень</p>
                <p className="font-semibold">42</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookies Section */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Cookie" className="h-5 w-5" />
              Информация о Cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Для образовательных целей вы можете просмотреть cookies вашего
              браузера
            </p>

            {!hasPermission ? (
              <Button
                onClick={requestCookies}
                className="w-full"
                variant="outline"
              >
                <Icon name="Eye" className="mr-2 h-4 w-4" />
                Показать Cookies
              </Button>
            ) : (
              <div className="space-y-2">
                <h4 className="font-semibold">Текущие Cookies:</h4>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm break-all">
                    {cookies || "Cookies не найдены"}
                  </code>
                </div>
                <p className="text-xs text-gray-500">
                  ⚠️ Это демонстрация для образовательных целей
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
