import Button from "@/component/Button";
import Input from "@/component/input";

export default function Login() {
  return (
    <form>
      <div className="w-1/4 flex justify-center bg-gray-50 m-auto items-center mt-12 rounded-xl shadow-lg">
        <div className="border-b border-gray-900/10 pb-12 p-5 w-full">
          <h2 className="text-2xl font-semibold text-gray-900">Login</h2>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <div className="mt-2 w-full">
                <Input
                  classname="w-full"
                  label="Username"
                  name="username"
                  type="text"
                />
                <Input
                  classname="w-full"
                  label="Email"
                  name="email"
                  type="text"
                />
                <Button classname="w-1/4 border-green-500" type="submit">
                  Simpan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
