import Routes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position='top-center' richColors />
      <Routes />;
    </QueryClientProvider>
  );
}

export default App;
